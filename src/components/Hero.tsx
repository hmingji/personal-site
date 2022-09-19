import classNames from 'classnames';
import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  //need to change into using something like uselayouteffect
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      ref={ref}
      className="hero my-20"
    >
      <div className="hero-content block">
        <div
          className={classNames(
            entry?.isIntersecting
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-6',
            'transition-all duration-[1100ms] ease-in-out'
          )}
        >
          <div className="font-medium">Hello!</div>
        </div>

        <div className="h-40">
          <div
            className={classNames(
              'border-l-4 border-black pl-5 mt-2 transition-[max-height] duration-[1200ms] ease-in-out delay-[1100ms]',
              entry?.isIntersecting ? 'max-h-60' : 'max-h-0'
            )}
          >
            <div
              className={classNames(
                'text-5xl font-bold transition-all duration-700 ease-in-out delay-[2000ms]',
                entry?.isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-full'
              )}
            >
              I&apos;m Ming Ji.
            </div>
            <div
              className={classNames(
                'text-5xl font-bold transition-all duration-700 ease-in-out delay-[2200ms]',
                entry?.isIntersecting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-full'
              )}
            >
              And I love to build stuffs with react.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
