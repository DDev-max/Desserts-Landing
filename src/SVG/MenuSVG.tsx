import type { SVGProps } from 'react'

export function MenuSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
      <g strokeWidth='0'></g>
      <g strokeLinecap='round' strokeLinejoin='round'></g>
      <g>
        {' '}
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z'
        ></path>{' '}
      </g>
    </svg>
  )
}
