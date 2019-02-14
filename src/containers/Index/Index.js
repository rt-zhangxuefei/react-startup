import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneUser } from '../../actions/user'
import { getPostByPage } from '../../actions/post'
import Header from '../../components/Header'
import styles from './Index.module.less'

class Index extends Component {
  render() {
    const { user, post, getOneUser, getPostByPage } = this.props
    return (
      <div className={styles.index}>
        <Header />

        <button
          onClick={() => {
            getOneUser()
          }}
        >
          获取一个用户
        </button>
        <p>
          {user.isFetching
            ? 'loading...'
            : user.user && JSON.stringify(user.user)}
        </p>
        <button
          onClick={() => {
            getPostByPage(1)
          }}
        >
          获取一篇文章
        </button>
        <p>
          {post.isFetching
            ? 'loading...'
            : post.post && JSON.stringify(post.post)}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    post: state.post
  }
}

export default connect(
  mapStateToProps,
  { getOneUser, getPostByPage }
)(Index)
