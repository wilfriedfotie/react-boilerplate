import React, { useEffect } from 'react'
import { Loader } from './Loader';

const CustomInfiniteScroll: React.FC<{ hasMore: boolean, loadMore: Function, children: JSX.Element }> = ({ hasMore, loadMore, children }) => {
    const options = {
        threshold: .2
    }
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(async (entry) => {

                if (entry.isIntersecting) {
                    if (isLoading) return;
                    if (hasMore) {
                        setLoading(true)
                        await loadMore()
                        setLoading(true)
                    } else {
                        observer.unobserve(entry.target);
                    }
                }
                console.log(entry.isIntersecting);

            })
        }, options);



        let target = document.querySelector('#loader');

        if (target != null) {
            observer.observe(target);

        }

        return () => observer.disconnect();

    }, [])



    return (
        <div id='scroolView'>
            {hasMore && " PAP"}
            {children}
            {hasMore && <div id="loader" className='flex items-center justify-center'> <Loader /></div>}
        </div>
    )
}

export default CustomInfiniteScroll

