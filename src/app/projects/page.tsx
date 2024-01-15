import PageTransitions from '@/components/framer/PageTransition'
import dynamic from 'next/dynamic';

const TestGallery = dynamic(() => import("./GetImages"));


export default function page() {

    return (
        <PageTransitions>
            <TestGallery />
        </PageTransitions>
    )
}
