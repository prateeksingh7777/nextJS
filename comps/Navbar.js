import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={66}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninja"><a>Ninjas List</a></Link>
        </nav>
     );
}
 
export default Navbar;