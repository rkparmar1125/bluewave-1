
import Image from 'next/image';
import Slider from '@/components/Slider';
import Banner from '@/components/Banner';
import Digitalmarketing from '@/components/Digitalmarketing';
import OurClient from '@/components/Client';
import Service from '@/components/Service';
import Quickstats from '@/components/Quickstats';
import Testimonial from '@/components/Testimonial';
import Casestudy from '@/components/Casestudy';
import Blog from '@/components/Blog';
import Bottom from '@/components/Bottom';
export default function Home() {
  return (
	    <>
            <main className="main">
                <Banner />
                <Digitalmarketing />
                <OurClient />
                <Service />
                <Quickstats />
                <Testimonial />
                <Casestudy />
                <Blog />
                <Bottom />
            </main>
        </>
    )
}
