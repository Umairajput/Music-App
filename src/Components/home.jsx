import React, { useState, useRef } from 'react'
import song1 from '../Audio/song10.mpeg'
import song2 from '../Audio/song2.mpeg'
import song3 from '../Audio/song3.mpeg'
import song4 from '../Audio/song4.mpeg'
import song5 from '../Audio/song5.mpeg'
import song6 from '../Audio/song6.mpeg'
import song7 from '../Audio/song7.mpeg'
import song8 from '../Audio/song8.mpeg'
import song9 from '../Audio/song9.mpeg'
import song10 from '../Audio/song1.mpeg'
import song11 from '../Audio/kitna bechen hokey tm se miley.mpeg'
import song12 from '../Audio/manikey.mpeg'
import song13 from '../Audio/i am unstopble.mpeg'
import song14 from '../Audio/bol do naa zraa.mpeg'
import song15 from '../Audio/devine 359.mpeg'
import song16 from '../Audio/rang shrbto ka.mpeg'
import song17 from '../Audio/mein tera.mpeg'
import song18 from '../Audio/no love.mpeg'
import song19 from '../Audio/falak tk chl sat chl.mpeg'
import song20 from '../Audio/dil ko karar aya.mpeg'
import song21 from '../Audio/song21.mpeg'
import song22 from '../Audio/song22.mpeg'
import song23 from '../Audio/song23.mpeg'
import song24 from '../Audio/song24.mpeg'
import song25 from '../Audio/song25.mpeg'
import song26 from '../Audio/song26.mpeg'
import song27 from '../Audio/song27.mpeg'
import song28 from '../Audio/song28.mpeg'
import song29 from '../Audio/song29.mpeg'
import song30 from '../Audio/song30.mpeg'
import song31 from '../Audio/song31.mpeg'
import song32 from '../Audio/song32.mpeg'
import song33 from '../Audio/song33.mpeg'
import song34 from '../Audio/song34.mpeg'
import song35 from '../Audio/song35.mpeg'
import song36 from '../Audio/song36.mpeg'
import song37 from '../Audio/song37.mpeg'
import song38 from '../Audio/song38.mpeg'
import song39 from '../Audio/song39.mpeg'
import song40 from '../Audio/song40.mpeg'
import image1 from '../Utils/Images/Ainsi-bas-la-vida.jpeg'
import image2 from '../Utils/Images/jaleby-baby.jpeg'
import image3 from '../Utils/Images/kese jao me yaha se.jpeg'
import { StepBackwardOutlined, StepForwardOutlined, PlayCircleOutlined, PauseCircleFilled } from '@ant-design/icons'


function Home() {
    const [next, setNext] = useState(0)
    const [stop, setStop] = useState(true)
    const [animation, setAnimation] = useState(false)
    let myRef = useRef()
    let AudioObj = [
        {
            link: song1,
            name: 'Tu Akey Dekh Le',
            img: 'https://i.ytimg.com/vi/A66TYFdz8YA/maxresdefault.jpg'
        },
        {
            link: song2,
            name: 'Jaleby Baby',
            img: image2
        },
        {
            link: song3,
            name: 'Man Mast Magan',
            img: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Mast_Magan.jpg'
        },
        {
            link: song4,
            name: 'Tu Hii Haqeeqat',
            img: 'https://i.scdn.co/image/ab67616d0000b273af0213dbc898cac727086c70'
        },
        {
            link: song5,
            name: 'Dil tera Jadu Tutuga Pta Chlega',
            img: 'https://i.ytimg.com/vi/4RBH4jfcsLo/maxresdefault.jpg'
        },
        {
            link: song6,
            name: 'Plain Jane (Roberto Kan Remix)',
            img: 'https://i1.sndcdn.com/artworks-tbyiasUMz5rDErVp-L4G7SQ-t500x500.jpg'
        },
        {
            link: song7,
            name: 'Lambiya Sii Judaiya',
            img: 'https://i.ytimg.com/vi/vc-KxBjIbgI/maxresdefault.jpg'
        },
        {
            link: song8,
            name: 'Kese Jao Me Yahan Se',
            img: image3
        },
        {
            link: song9,
            name: 'Ooo Anta Waa Ooo Anta Waa',
            img: 'https://timesofindia.indiatimes.com/thumb/msid-88211690,width-1200,height-900,resizemode-4/.jpg'
        },
        {
            link: song10,
            name: 'Ainsi Bas La vida (slowed + reverb)',
            img: image1
        },
        {
            link: song11,
            name: 'kitna bechen hokey tm se miley',
            img: 'https://i.ytimg.com/vi/Ob5gRnwbeHU/maxresdefault.jpg'
        },
        {
            link: song12,
            name: 'Mainkey',
            img: 'https://i.ytimg.com/vi/oGOczSNJ83k/maxresdefault.jpg'
        },
        {
            link: song13,
            name: 'I am Unstopble',
            img: 'https://i.pinimg.com/originals/63/ec/6c/63ec6c40ecb0aac032369c4d25735722.jpg'
        },
        {
            link: song14,
            name: 'bol do naa zraa',
            img: 'https://c.saavncdn.com/709/Bol-Do-Na-Zara-Instrumental-Hindi-2018-20181221231527-500x500.jpg'
        },
        {
            link: song15,
            name: 'devine 359',
            img: 'data:image/jpeg;base64,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'
        },
        {
            link: song16,
            name: 'Main rang shrbto ka',
            img: 'https://i1.sndcdn.com/artworks-000180511571-zbnr5m-t500x500.jpg'
        },
        {
            link: song17,
            name: 'Mein tera',
            img: 'https://i.ytimg.com/vi/_QP7ng2iOqk/hqdefault.jpg'
        },
        {
            link: song18,
            name: 'no love',
            img: 'https://i.ytimg.com/vi/6RrEQJNZwPQ/maxresdefault.jpg'
        },
        {
            link: song19,
            name: 'falak tk chl sat chl',
            img: 'https://i.scdn.co/image/ab67616d00001e02d74bcb967da7293697c0062f'
        },
        {
            link: song20,
            name: 'dil ko karar aya',
            img: 'https://i.ytimg.com/vi/lX3vT_Gm_HE/hq720.jpg'
        },
        {
            link: song21,
            name: 'Diwaney hm nhi hotey diwani rat ati hai',
            img: 'https://i.ytimg.com/vi/B-oZ64A_TeQ/mqdefault.jpg'
        },
        {
            link: song22,
            name: 'teri jhalak asharfi',
            img: 'https://i.ytimg.com/vi/dTMZiWGIZfU/hqdefault.jpg'
        },
        {
            link: song23,
            name: 'let me down slowly x main dhoondne ko zamaane mein',
            img: 'https://i1.sndcdn.com/artworks-JOEffkgOaCcqWeuO-3evqyA-t500x500.jpg'
        },
        {
            link: song24,
            name: 'Afsaney',
            img: 'https://i.ytimg.com/vi/ijE2MMtzkHg/maxresdefault.jpg'
        },
        {
            link: song25,
            name: 'Quarantine talha anjum',
            img: 'https://i.ytimg.com/vi/KzO0iKufUc0/maxresdefault.jpg'
        },
        {
            link: song26,
            name: 'Bulleya',
            img: 'https://i.scdn.co/image/ab67616d0000b273cfdf2cecda3a566ca424df3e'
        },
        {
            link: song27,
            name: 'Agency',
            img: 'https://i1.sndcdn.com/artworks-For15laXNWaftOWn-lrH72Q-t500x500.jpg'
        },
        {
            link: song28,
            name: 'Zara sii dil me de jaga tu',
            img: 'https://i.ytimg.com/vi/oiD-rVWEXjM/maxresdefault.jpg'
        },
        {
            link: song29,
            name: 'Musafir',
            img: 'https://i.ytimg.com/vi/Ut7pg5Cs0jU/maxresdefault.jpg'
        },
        {
            link: song30,
            name: 'kuch asi lagan',
            img: 'https://i.ytimg.com/vi/M-XU-baygDY/maxresdefault.jpg'
        },
        {
            link: song31,
            name: 'Diwaney hm nhi hotey diwani rat ati hai',
            img: 'https://i.ytimg.com/vi/L9QUmvQkI24/maxresdefault.jpg'
        },
        {
            link: song32,
            name: 'teri jhalak asharfi',
            img: 'https://i.ytimg.com/vi/dTMZiWGIZfU/hqdefault.jpg'
        },
        {
            link: song33,
            name: 'Pasoori',
            img: 'https://i.ytimg.com/vi/5Eqb_-j3FDA/mqdefault.jpg'
        },
        {
            link: song34,
            name: 'Tm chley aoo paharon ki kasam',
            img: 'https://i.ytimg.com/vi/7UpNiTap4m8/maxresdefault.jpg'
        },
        {
            link: song35,
            name: 'Ankh uthi mohabbat ne angrae lii',
            img: 'https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/03/Aankh-Uthi-Mohabbat-Ne-Angrai-Li-Lyrics-Jubin.jpg'
        },
        {
            link: song36,
            name: 'Raataan Lambiyan',
            img: 'data:image/jpeg;base64,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'
        },
        {
            link: song37,
            name: 'Meri Zindgi Hai Tu',
            img: 'https://i.ytimg.com/vi/_zNH47cawJo/sddefault.jpg'
        },
        {
            link: song38,
            name: 'Hum Nawa Mere',
            img: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Humnava_Mere.jpg'
        },
        {
            link: song39,
            name: 'Bella Ciao',
            img: 'https://i.ytimg.com/vi/wVZ68KtlmBc/hqdefault.jpg'
        },
        {
            link: song40,
            name: 'Love Nawantiti',
            img: 'https://i.ytimg.com/vi/RY3B_XXmTYU/maxresdefault.jpg'
        },
    ]
    const play = () => {
        myRef.current.play()
        setStop(false)
        setAnimation(true)
    }
    const paus = () => {
        myRef.current.pause()
        setStop(true)
        setAnimation(false)
    }
    const Next = () => {
        setNext(next + 1)
        setStop(false)
    }
    const Backs = () => {
        setNext(next + 39)
        setStop(false)
    }
    const Nexts = () => {
        setNext(next - 39)
        setStop(false)
    }
    const Back = () => {
        setNext(next - 1)
        setStop(false)
        if (next === 0) {
            setNext(AudioObj[39])
        }
    }
    return (
        <div className='container'>
            <div className='inner_container'>
                <div className='inner_div'>
                    <div className='image_div'><img className='img' src={AudioObj[next].img} alt="" /></div>
                    {
                        animation === false ?
                            <div className="now playing " id="music">
                                <span className="spn a1"></span>
                                <span className="spn a2"></span>
                                <span className="spn a3"></span>
                                <span className="spn a4"></span>
                                <span className="spn a5"></span>
                                <span className="spn a6"></span>
                                <span className="spn a7"></span>
                                <span className="spn a8"></span>
                                <span className="songName" behavior="" direction="">{AudioObj[next].name}</span>
                            </div>
                            : <div className="now play " id="music">
                                <span className="bar n1"></span>
                                <span className="bar n2"></span>
                                <span className="bar n3"></span>
                                <span className="bar n4"></span>
                                <span className="bar n5"></span>
                                <span className="bar n6"></span>
                                <span className="bar n7"></span>
                                <span className="bar n8"></span>
                                <marquee className="songname" behavior="" direction="">{AudioObj[next].name}</marquee>
                            </div>
                    }
                    <div className='audio_div'>
                        <audio ref={myRef} className='audio' controls autoPlay src={AudioObj[next].link}>
                        </audio>
                    </div>
                    <div className='icons_div'>
                        {next === 0 ?
                            <StepBackwardOutlined onClick={Backs} className='icon' />
                            :
                            <StepBackwardOutlined onClick={Back} className='icon' />
                        }
                        {stop === true ?
                            <button className='icon' onClick={play}><PlayCircleOutlined /></button>
                            :
                            <button className='icon' onClick={paus}><PauseCircleFilled /></button>
                        }
                        {next === 39 ?
                            <StepForwardOutlined onClick={Nexts} className='icon' />
                            :
                            <StepForwardOutlined onClick={Next} className='icon' />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home

