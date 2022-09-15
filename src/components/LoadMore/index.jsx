import React, { useEffect, useRef, useState } from 'react'
export default function LoadMore(props) {
    const more = useRef()
    const [loadTop, setLoadTop] = useState(10000)
    let [n,setn]=useState(580)
    useEffect(() => {
        let timer = null
        //获取视口的高度
        let winHeight = document.documentElement.clientHeight
        window.addEventListener('scroll', scorllHandle)
        function scorllHandle() {
            if (more.current) {
                // 获取标签到顶部的距离
                const moreHeight = more.current.getBoundingClientRect().top
                setLoadTop(moreHeight)
                // 防止下拉一直触发  防抖
                if (timer) {
                    clearTimeout(timer)
                } else {
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                            setn(n+580)
                            props.onLoadMore()
                            more.current.style.bottom=n+"px"
                        }
                    }, 1000);
                }
                // 在组件销毁前 移除 滚动事件
                return () => {
                    window.removeEventListener('scroll', scorllHandle)
                    clearTimeout(timer)
                }
            }
        }
    }, [loadTop])

    return (
        <div className='load' ref={more}></div>
    )
}
