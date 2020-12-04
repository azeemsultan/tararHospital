'use strict'
 
import React from 'react'
import { TheChat, TheChatStyle } from 'the-chat'
import { TheImageStyle } from 'the-image'
import { TheInputStyle } from 'the-input'
import { TheButtonStyle } from 'the-button'
import { TheVideoStyle } from 'the-video'
import { TheSpinStyle } from 'the-spin'
import { TheFormStyle } from 'the-form'
import { Container } from '@material-ui/core'
 
const images = [
  'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/dummy/01.jpg',
  'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/dummy/02.jpg',
  'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/dummy/03.jpg'
]
 
const videos = [
  './mov_bbb.mp4'
]
 
class Chat extends React.Component {
  constructor (props) {
    super(props)
    this._timer = null
    this.state = {
      form: {},
      items: [
       
        {
          raw: true,
          at: new Date('2017/10/08 14:44'),
          node: <h3>You can send message</h3>,
        },
        {
          at: new Date('2017/10/08 14:38'),
          image: images[2],
          align: 'right',
          who: {
            name: 'hoge',
            image: images[0]
          }
        },
      ]
    }
  }
 
  render () {
    const { items } = this.state
    return (
      <div>
          <Container maxWidth="sm">
        <TheVideoStyle/>
        <TheButtonStyle/>
        <TheInputStyle/>
        <TheImageStyle/>
        <TheSpinStyle/>
        <TheFormStyle/>
        <TheChatStyle/>
        <TheChat>
          <TheChat.TimeLine style={{
            height: '300px',
            border: '4px solid #333'
          }}
                            items={items}
                            onWho={(who) => console.log('who selected', who)}
                            onScrollReachTop={() => console.log('reached to top')}
                            onScrollReachBottom={() => console.log('reached to bottom')}
          />
          <TheChat.Form onUpdate={(form) => this.setState({ form })}
                        values={this.state.form}
                        onSubmit={() => this.setState({
                          form: {},
                          items: [...this.state.items, {
                            at: new Date(),
                            text: this.state.form.text,
                            align: 'right',
                            who: {
                              name: 'Me',
                              color: '#33A'
                            }
                          }]
                        })}
          />
        </TheChat>
 
        <hr/>
 
        <TheChat>
          <TheChat.TimeLine alt='Not chat yet'
                            empty={true}
          />
        </TheChat>
        </Container>
      </div>
 
    )
  }
 
  componentDidMount () {
    this._timer = setInterval(() => {
      const { items } = this.state
      if (window.DISABLE_THE_CHAT_PUSH) {
        return
      }
      this.setState({
        items: [...items, {
          at: new Date(),
          text: 'Hello, How can i help you?',
          align: this.state.items.length % 2 ? 'left' : 'right',
          who: {
            name: 'hoge',
            initial: 'H'
          }
        }]
      })
      console.log('item added')
    }, 50000)
  }
 
  componentWillUnmount () {
    clearInterval(this._timer)
  }
}
 
export default Chat