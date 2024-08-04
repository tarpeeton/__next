import Link from 'next/link'
import { FC } from 'react'





const Header:FC = () => {

	return(
		<div className='w-full h-[60px] sticky top-0 bg-zinc-900 flex items-center'>
			<div className='w-full flex justify-between'>
				<ul className='w-full flex items-center justify-around'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
					<Link href='/about'>About</Link>
					</li>
					<li>
					<Link href='/contact'>Contact</Link>

					</li>
				</ul>
			</div>
		</div>
	)
}


export default Header;