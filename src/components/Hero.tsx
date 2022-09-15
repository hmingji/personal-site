import classNames from 'classnames';
import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const animateClassName = classNames(
    entry?.isIntersecting
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-6',
    'transition-all duration-700 ease-in-out'
  );
  return (
    <div
      ref={ref}
      className="hero"
    >
      <div className="hero-content block">
        <div className={animateClassName}>
          <div className="font-medium">Hello!</div>
        </div>

        <div className="border-l-4 border-black pl-5 mt-2">
          <div className="text-5xl font-bold">I&apos;m Ming Ji.</div>
          <div className="text-5xl font-bold">
            And I love to build stuffs with react.
          </div>
        </div>
      </div>
    </div>
  );
}
