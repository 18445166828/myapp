import React,{Component} from 'react';
import './css/index.css'

const url = require("./image/01.png");

class Header extends Component {
    render(){
      const handleMine = () => {
        window.open('./mineDetail')
        
      }
        return(
            <div className="header">
              <img className="image" src={url} />
              <span className="span" onClick={()=>handleMine()}>隐私设置</span>
              <div className="headerRight">
                <span className="title">程序员的漫漫长路</span>
                <div>
                  <span className="span1">尚未进行身份认证</span>
                  <button>我要认证</button>
                </div>
                <span className="span2">快来学习，别怕秃头</span>
              </div> 
            </div>
        )
    }
}

export default Header;