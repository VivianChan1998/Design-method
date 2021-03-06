import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import './Front.css'
import NavBar from '../Components/NavBar'
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

export default class Front extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentPage: null,
        }
    }
    handlePageChange = num => {
        this.setState({currentPage: num})
    }
    render(){
        return(
            <ReactPageScroller
                pageOnChange={this.handlePageChange}
                customPageNumber={this.state.currentPage}
            >
                <P1 />
                <P2 />
                <P3 />
            </ReactPageScroller>
        )
    }
}


class P1 extends React.Component{
    constructor(){
        super()
        this.state = {
            finishedTyping: false
        }
    }
    render(){
        var cl = this.state.finishedTyping? 'afterType' : ''
        return(
            <div id='P1-wrapper'>
                <NavBar white/>
                <div className={cl}>
                    <Typing cursorClassName='my-cursor' speed={80}>
                        <div className='strokeme ccc' >
                            <span className='ds'>CCCCCCCCCCCCCCCCCC</span>
                        </div>
                    </Typing >
                    <Typing startDelay={200}
                    cursorClassName='my-cursor' speed={80}>
                        <div className='strokeme ccc'>
                            <span className='ds'>CCCCCCCCCCCCCCCCCCC</span>
                        </div>
                    </Typing>
                    <Typing startDelay={400}
                    cursorClassName='my-cursor' speed={80}>
                        <div className='strokeme ccc'>
                            <span className='ds'>CCCCCC</span>
                            <span className='the-design'>CREATIVE</span>
                            <span className='ds'>CCCCCC</span>
                        </div>
                    </Typing>
                    <Fade top delay={1000} duration={30}>
                        <div className='after-content'>
                            ( noun. )
                            the way that something has been planned and made, including its appearance, how it works
                            <br/>
                            突破 · 定義 ·重組
                        </div>
                    </Fade>
                    <Typing startDelay={600}
                    cursorClassName='my-cursor' speed={80}>
                        <div className='strokeme ccc'>
                            <span className='ds'>CCCCCCCCCCCCCCCCCCC</span>
                        </div>
                    </Typing>
                    <Typing startDelay={800}
                    cursorClassName='my-cursor' duration={400}>
                        <div className='strokeme ccc'>
                            <span className='ds'>CCCCCCCCCCCCCCCCCCC</span>
                        </div>
                    </Typing>
                    <Typing startDelay={1000}
                    cursorClassName='my-cursor' speed={80}
                    onFinishedTyping={() => {
                        setTimeout(
                        this.setState({finishedTyping: true}), 50)
                    }}
                    >
                        <div className='strokeme ccc'>
                            <span className='ds'>CCCCCCCCCCCCCCCCCCC</span>
                        </div>
                    </Typing>
                </div>
            </div>
        )
    }
}

class P2 extends React.Component{
    constructor(){
        super()
        this.state = {
            visible: false
        }
    }
    render(){
        var cl = this.state.visible? 'afterType' : ''
        console.log(cl)
        return(
            <div id='P2-wrapper'>
                <div className={cl}>
                    <div className='strokeme2 ddd' >
                        <span className='dss'>DDDDDDDDDDDDDDDDDD</span>
                    </div>
                    <div className='strokeme2 ddd'>
                        <span className='dss'>DDDDDDDDDDDDDDDDDD</span>
                    </div>
                    <div className='strokeme2 ddd'>
                        <span className='dss'>DDDDDD</span>
                        <span className='the-design-blue'>DESIGN</span>
                        <span className='dss'>DDDDDD</span>
                    </div>
                    <Fade top
                        onReveal={ () => this.setState({visible: true}) }
                        delay={1500}
                        duration={400}
                    >
                        <div className='after-content-blue'>
                            ( verb. )
                            to make or draw plans for something.
                            <br/>
                            發散 · 轉變 · 收斂
                        </div>
                    </Fade>
                    <div className='strokeme2 ddd'>
                        <span className='dss'>DDDDDDDDDDDDDDDDDD</span>
                    </div>
                    <div className='strokeme2 ddd'>
                        <span className='dss'>DDDDDDDDDDDDDDDDDD</span>
                    </div>
                    <div className='strokeme2 ddd'>
                        <span className='dss'>DDDDDDDDDDDDDDDDDD</span>
                    </div>
                </div>
            </div>
        )
    }
}



class P3 extends React.Component{
    render(){
        return(
            <div id='P3-wrapper'>
                <h2>CREATIVE</h2>
                <h2>DESIGN</h2>
                <p>找到啟發創造力的原則，讓設計能天馬行空也能實事求是。</p>
                <h5>國立臺灣科技大學 設計系工業設計組</h5>
                <h5>108-2 設計方法 team2</h5>
                <h5>指導老師：王思如 Winny</h5>
                <h5>組員：詹欣玥 徐勻亮 莊式謙 王一依 鄭晴文 蔡文妮</h5>
                <Link to='/home'>
                <button>
                    開始認識設計方法
                </button>
                </Link>
            </div>
        )
    }
}