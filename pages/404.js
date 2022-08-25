import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router';
const Notfound = () => {
    const router =useRouter();
    useEffect(()=>{
      setTimeout(() => {
        router.push('/');
      }, 3000);

    },[])
    return ( 
        <div className="not-found">
            <h1>Oooopsss.....</h1>
            <h2>The page not found</h2>
            <p>Go back to <Link href="/"><a>Homapage</a></Link></p>
        </div>
     );
}
 
export default Notfound;