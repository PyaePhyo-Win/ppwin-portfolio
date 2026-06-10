<template>
  <section id="contact" class="section-shell">
    <div class="section-frame">
      <div class="section-card grid gap-7 p-5 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div class="flex flex-col justify-between gap-6">
          <div class="section-heading text-left">
            <p class="section-eyebrow">Contact</p>
            <h2 class="section-title">Build Something Worth Shipping</h2>
            <p class="section-copy mx-0">If you need someone who can think through the system, shape the interface, and deliver with discipline, send a message.</p>
          </div>

          <div class="grid gap-4">
            <a href="https://github.com/PyaePhyo-Win" target="_blank" rel="noopener noreferrer" class="panel p-5 transition-transform duration-300 hover:-translate-y-1">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">GitHub</p>
              <p class="mt-3 text-lg text-[var(--text)]">Code, experiments, and developer tooling.</p>
            </a>
            <a href="https://www.linkedin.com/in/pyae-phyo-win-748826297" target="_blank" rel="noopener noreferrer" class="panel p-5 transition-transform duration-300 hover:-translate-y-1">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">LinkedIn</p>
              <p class="mt-3 text-lg text-[var(--text)]">Professional background, experience, and network.</p>
            </a>
            <a href="mailto:pyaephyowin706@gmail.com" class="panel p-5 transition-transform duration-300 hover:-translate-y-1">
              <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">Email</p>
              <p class="mt-3 text-lg text-[var(--text)]">Direct conversation for collaboration or opportunities.</p>
            </a>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="panel space-y-6 p-5 md:p-6">
        <div>
          <label for="name" class="block text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--text-soft)]">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            @blur="validateField('name')"
            :style="inputStyle('name')"
            class="mt-2 block min-h-[52px] w-full rounded-[1.1rem] border bg-transparent px-4 py-3 text-base shadow-none outline-none transition-colors duration-300"
          />
          <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--text-soft)]">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            @blur="validateField('email')"
            :style="inputStyle('email')"
            class="mt-2 block min-h-[52px] w-full rounded-[1.1rem] border bg-transparent px-4 py-3 text-base shadow-none outline-none transition-colors duration-300"
          />
          <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <div>
          <label for="message" class="block text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--text-soft)]">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            @blur="validateField('message')"
            :style="inputStyle('message')"
            rows="5"
            class="mt-2 block w-full rounded-[1.1rem] border bg-transparent px-4 py-3 text-base shadow-none outline-none transition-colors duration-300"
          ></textarea>
          <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
        </div>

        <button
          type="submit"
          :disabled="!isFormValid"
          class="btn-primary w-full justify-center sm:w-auto"
          :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        >
          Send Inquiry
        </button>

        <p v-if="successMessage" class="mt-4 text-sm font-semibold text-center" :style="{ color: successMessageColor }">{{ successMessage }}</p>
      </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  message: '',
});

const successMessage = ref('');

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateField = (field: 'name' | 'email' | 'message') => {
  errors[field] = ''; // Clear previous error

  if (field === 'name' && !form.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(form.email)) {
      errors.email = 'Invalid email format.';
    }
  }

  if (field === 'message') {
    if (!form.message.trim()) {
      errors.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
  }
};

const inputStyle = (field: 'name' | 'email' | 'message') => {
  let borderColor = 'var(--surface-border)';

  if (errors[field]) {
    borderColor = '#dc2626';
  } else if (form[field].trim() && (field !== 'email' || validateEmail(form.email))) {
    borderColor = 'var(--accent)';
  }

  return {
    borderColor,
    color: 'var(--text)',
    background: 'color-mix(in srgb, var(--surface-strong) 72%, transparent)'
  };
};


const isFormValid = computed(() => {
  const isNameValid = form.name.trim().length > 0;
  const isEmailValid = validateEmail(form.email);
  const isMessageValid = form.message.trim().length >= 10;

  return isNameValid && isEmailValid && isMessageValid;
});

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = '';
  });
  successMessage.value = '';
};

const successMessageColor = computed(() => successMessage.value.includes('successfully') ? 'var(--accent)' : '#dc2626');

const submitForm = () => {
  // Validate all fields to show errors if any
  validateField('name');
  validateField('email');
  validateField('message');

  if (isFormValid.value) {
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', form);
    successMessage.value = 'Your message has been sent successfully!';
    setTimeout(() => {
      resetForm();
    }, 3000); // Reset after 3 seconds
  } else {
    successMessage.value = 'Please correct the errors in the form.';
  }
};
</script>
