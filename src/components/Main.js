import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LikeAction } from '../assets/images/like.svg'
import { ReactComponent as CommentAction } from '../assets/images/comment.svg'
import { ReactComponent as ShareAction } from '../assets/images/share.svg'
import { ReactComponent as SendAction } from '../assets/images/send.svg'

const Main = () => {
  return (
	<Wrapper>
		<PostBox>
			<div>
				<img className="avatar" src="/images/user.svg" alt="user" />
				<button>Start a post</button>
			</div>
			<div>
				<button>
					<img src="/images/photo-icon.svg" alt="photo icon" />
					<span>Photo</span>
				</button>
				<button>
					<img src="/images/video-icon.svg" alt="video icon" />
					<span>Video</span>
				</button>
				<button>
					<img src="/images/event-icon.svg" alt="event icon" />
					<span>Event</span>
				</button>
				<button>
					<img src="/images/write-icon.svg" alt="write icon" />
					<span>Write article</span>
				</button>
			</div>
		</PostBox>
		<ArticleCard>
			<ArticleActor>
				<div className="actor">
					<a href="">
						<img src="/images/user.svg" alt="user" />
						<div>
							<span className="title">Title</span>
							<span className="info">Info</span>
							<span className="date">Date</span>
						</div>
					</a>
				</div>
				<div className="ellipsis">
					<a href="">
						<img src="/images/ellipsis.svg" alt="elipsis" />
					</a>
				</div>
			</ArticleActor>
			<ArticleDescription>
				<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ullam minus tempore praesentium ea eaque soluta iure, possimus voluptatem eum iste quasi expedita dolore temporibus nemo, molestiae dolor nesciunt placeat.</span>
			</ArticleDescription>
			<ArticleImage>
				<img src="/images/article-image.jpg" alt="article image" />
			</ArticleImage>
			<SocialCounts>
				<li>
					<button>
						<img src="/images/like.svg" alt="" />
						<img src="/images/celebrate.svg" alt="" />
						<img src="/images/insightful.svg" alt="" />
						<span>132</span>
					</button>
				</li>
				<li>
					<button><span>9 comments</span></button>
				</li>
			</SocialCounts>
			<SocialActions>
				<div>
					<button>
						<LikeAction />	
						<span>Like</span>
					</button>
					<button>
						<CommentAction />
						<span>Comment</span>
					</button>
					<button>
						<ShareAction />
						<span>Share</span>
					</button>
					<button>
						<SendAction />
						<span>Send</span>
					</button>
				</div>
			</SocialActions>
			{/* <CommentBox>
				<div>
					<img className="avatar" src="/images/user.svg" alt="user" />
					<button>Start a post</button>
				</div>
			</CommentBox> */}
		</ArticleCard>
	</Wrapper>
  )
}

const Wrapper = styled.div`
grid-area: main;
`

const CommonCard = styled.div`
background-color: #fff;
  border: 1px solid rgba(0,0,0, 0.08);
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
`

const ArticleCard = styled(CommonCard)`

`

const ArticleActor = styled.div`
display: flex;
margin-bottom: 15px;
.actor {
	flex-grow: 1;
	a {
		text-decoration: none;
		display: flex;
		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
			margin-right: 15px;
		}
		div {
			.title {
				display: block;
				font-size: 1.5rem;
				color: rgba(0,0,0,1);
				font-weight: 600;
				line-height: 1;
				margin-bottom: 0.3rem;
			}
			.info {
				display: block;
				font-size: 1.4rem;
				color: rgba(0,0,0,0.7);
				font-weight: 400;
				line-height: 1;
				margin-bottom: 0.2rem;
			}
			.date {
				display: block;
				font-size: 1.3rem;
				color: rgba(0,0,0,0.7);
				font-weight: 400;
				line-height: 1;
				margin-bottom: 0.2rem;
			}
		}
	}
}
.ellipsis {
	margin-top: -5px;
	a {
		display: inline-flex;
		height: 32px;
		width: 32px;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		transition: 0.5s;
		border-radius: 50%;
		img {
			
		}

		&:hover {
			background-color: rgba(0,0,0,0.05)
		}
	}
}
`

const ArticleDescription = styled.div`
	span {
		display: block;
		font-size: 1.5rem;
		color: rgba(0,0,0,0.9);
		font-weight: 400;
		line-height: 1.3;
		margin-bottom: 15px;
	}
`

const ArticleImage = styled.div`
	margin: auto -15px;
	img {
		width: 100%;
	}
`

const PostBox = styled(CommonCard)`
padding: 15px 15px 5px;
.avatar {
	border-radius: 50%;
	width: 48px;
	height: 48px;
	margin-right: 10px;
}
div:nth-child(1) {
	display: flex;
	margin-bottom: 10px;
	button {
		flex-grow: 1;
		cursor: pointer;
		color: rgba(0,0,0,0.4);
		padding: 8px 15px;
		border: 1px solid rgba(0,0,0,0.4);
		border-radius: 25px;
		font-weight: 600;
		background-color: transparent;
		transition: 0.5s;
		font-size: 1.4rem;
		text-align: left;
		&:hover {
			background-color: rgba(0,0,0,0.05);
		}
	}
}
div:nth-child(2) {
	display: flex;
	margin: auto -10px;
	justify-content: space-between;
	
	button {
		cursor: pointer;
		border: none;
		border-radius: 5px;
		background-color: transparent;
		display: flex;
		align-items: center;
		padding: 10px 10px;
		span {
			font-size: 1.4rem;
			font-weight: 600;
			color: rgba(0,0,0,0.4);
		}
		img {
			margin-right: 10px;
		}
		&:hover {
			background-color: rgba(0,0,0,0.08);
		}
	}
}
`

const SocialCounts = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
border-bottom: 1px solid rgba(0,0,0, 0.08);
padding: 0.5rem 0;
li {
	button {
		background-color: transparent;
		border: none;
		border-radius: none;
		display: inline-flex;
		align-items:end ;
		cursor: pointer;
		img {
			width: 16px;
			height: 16px;
			margin-left: -5px;
			border-radius: 50%;
			border: 1px solid #fff;
			background-color: #fff;
		}
		img:first-child() {
			margin-left: 0;
		}
		span {
			display: inline-block;
			font-size: 1.2rem;
			color: rgba(0,0,0,0.6);
		}
		&:hover {
			text-decoration: underline;
			color: #0a66c2;
		}
	}
}
`

const SocialActions = styled.div`
margin: 0.5rem 0 -10px;
div {
	display: grid;
    grid-auto-flow: column;
    justify-content: initial;
	column-gap: 0.4rem;
	button {
		cursor: pointer;
		border: none;
		border-radius: 5px;
		background-color: transparent;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10px 10px;
		flex: 0 1 auto;
		transition: 0.5s;
		span {
			font-size: 1.35rem;
			font-weight: 600;
			color: rgba(0,0,0,0.4);
		}
		svg {
			margin-right: 5px;
			color: rgba(0,0,0,0.6);
		}
		&:hover {
			background-color: rgba(0,0,0,0.08);
		}
	}
}
`

const CommentBox = styled.div``

export default Main