import React from 'react'
import styled from 'styled-components'

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
			Article card
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

export default Main