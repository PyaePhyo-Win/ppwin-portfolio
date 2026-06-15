import type { Directive, DirectiveBinding } from 'vue';

type RevealOrigin = 'bottom' | 'left' | 'right' | 'center';

type RevealBinding = {
  delay?: number;
  distance?: number;
  duration?: number;
  origin?: RevealOrigin;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

type RevealElement = HTMLElement & {
  __revealCleanup__?: () => void;
};

const parseBinding = (binding: DirectiveBinding<RevealBinding | number | undefined>) => {
  if (typeof binding.value === 'number') {
    return { delay: binding.value } satisfies RevealBinding;
  }

  return binding.value ?? {};
};

const setMotionVariable = (element: HTMLElement, name: string, value?: number, unit = 'ms') => {
  if (value == null) {
    return;
  }

  element.style.setProperty(name, `${value}${unit}`);
};

const revealElement = (element: HTMLElement) => {
  requestAnimationFrame(() => {
    element.classList.add('is-revealed');
  });
};

const cleanup = (element: RevealElement) => {
  element.__revealCleanup__?.();
  delete element.__revealCleanup__;
};

export const revealDirective: Directive<RevealElement, RevealBinding | number | undefined> = {
  beforeMount(element, binding) {
    const options = parseBinding(binding);

    element.classList.add('reveal-element');
    element.classList.add(`reveal-origin-${options.origin ?? 'bottom'}`);

    setMotionVariable(element, '--reveal-delay', options.delay);
    setMotionVariable(element, '--reveal-duration', options.duration);

    if (options.distance != null) {
      element.style.setProperty('--reveal-distance', `${options.distance}px`);
    }
  },
  mounted(element, binding) {
    const options = parseBinding(binding);
    const shouldRevealImmediately =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof window.IntersectionObserver === 'undefined';

    if (shouldRevealImmediately) {
      revealElement(element);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (options.once === false) {
              element.classList.remove('is-revealed');
            }

            return;
          }

          revealElement(element);

          if (options.once !== false) {
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.18,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px'
      }
    );

    observer.observe(element);
    element.__revealCleanup__ = () => observer.disconnect();
  },
  updated(element, binding) {
    const options = parseBinding(binding);

    element.classList.remove('reveal-origin-bottom', 'reveal-origin-left', 'reveal-origin-right', 'reveal-origin-center');
    element.classList.add(`reveal-origin-${options.origin ?? 'bottom'}`);

    setMotionVariable(element, '--reveal-delay', options.delay);
    setMotionVariable(element, '--reveal-duration', options.duration);

    if (options.distance != null) {
      element.style.setProperty('--reveal-distance', `${options.distance}px`);
    }
  },
  unmounted(element) {
    cleanup(element);
  }
};