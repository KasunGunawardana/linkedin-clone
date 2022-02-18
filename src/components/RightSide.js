import React from 'react'
import styled from 'styled-components'
import { ReactComponent as FeedIcon } from '../assets/images/feed-icon.svg'
import { ReactComponent as RightIcon } from '../assets/images/right-icon.svg'
import { ReactComponent as PlusIcon } from '../assets/images/plus-icon.svg'

const RightSide = () => {
  return (
	<Wrapper>
		<FollowerCard>
			<Title>
				<h2>Add to your feed</h2>
				<FeedIcon />
			</Title>
			<FeedList>
				<li>
					<a href="">
						<Avatar />
					</a>
					<div>
						<span className="name">
							Linkedin
						</span>
						<span className="info">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<button><PlusIcon /> Follow</button>
					</div>
				</li>
				<li>
					<a href="">
						<Avatar />
					</a>
					<div>
						<span className="name">
							Linkedin
						</span>
						<span className="info">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<button><PlusIcon /> Follow</button>
					</div>
				</li>
			</FeedList>
			<Link>
				<a href="">
					View all recommendations
					<RightIcon />
				</a>
			</Link>
		</FollowerCard>
	</Wrapper>
  )
}

const Wrapper = styled.div`
grid-area: rightside;
`

const FollowerCard = styled.div`
background-color: #fff;
  border: 1px solid rgba(0,0,0, 0.08);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
`

const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
h2 {
	font-size: 1.7rem;
	font-weight: 600;
	color: rgba(0,0,0, 0.8);
}
svg {
	color: rgba(0,0,0, 0.8);
	width: 18px;
	height: 18px;
}
`

const Link = styled.div`
margin: 5px -15px -15px;
border-top: 1px solid rgba(0,0,0, 0.08);
a {
	padding: 15px;
	display: flex;
	font-size: 1.5rem;
	align-items: center;
	text-decoration: none;
	color: rgba(0,0,0,0.8);
	svg {
		margin-left: 5px;
		fill: rgba(0,0,0,0.6);
		transition: 0.5s;
	}
	&:hover {
		background-color: rgba(0,0,0,0.05);
		svg {
			transform: translateX(2px)
		}
	}
}
`

const FeedList = styled.ul`
li {
	display: flex;
	padding: 8px 0;
	a {
		
	}

	.name {
		display: block;
		margin-bottom: .2rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: #000;
	}

	.info {
		display: block;
		margin-bottom: .2rem;
		font-size: 1.4rem;
		color: rgba(0,0,0,0.6);
	}

	button {
		margin-top: .5rem;
		cursor: pointer;
		color: rgba(0,0,0,0.5);
		padding: 8px 15px;
		border: 1px solid rgba(0,0,0,0.6);
		border-radius: 25px;
		display: inline-flex;
		align-items: center;
		font-weight: 600;
		background-color: transparent;
		transition: 0.5s;
		font-size: 1.5rem;
		svg {
			fill: rgba(0,0,0,0.6);
			margin-right: 5px;
		}

		&:hover {
			background-color: rgba(0,0,0,0.1);
		}
	}
	
}

`
const Avatar = styled.div`
	background-image: url('/images/user.svg');
	background-size: cover;
	background-position: center;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	margin-right: 10px;

`



export default RightSide