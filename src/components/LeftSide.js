import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ItemIcon } from '../assets/images/item-icon.svg'

const LeftSide = () => {
  return (
	<Wrapper>
		<ArtCard>
			<UserInfo>
				<CardBackground />
				<div className="text-center">
					<a>
						<Photo />
						<Link>Welcome, there!</Link>
					</a>
					<a>
						<AddPhotoText>Add a photo</AddPhotoText>
					</a>
				</div>
			</UserInfo>
			<Widget>
				<a href="">
					<div>
						<span>Connections</span>
						<div className="batch">19</div>
					</div>
					<span>Grow your network</span>
				</a>
			</Widget>
			<Item>
				<a href="">
					<ItemIcon />
					<span>My Items</span>
				</a>
			</Item>
			<Discover>
				<a href="">
					Discover more
				</a>
			</Discover>
		</ArtCard>
	</Wrapper>
  )
}

const Wrapper = styled.div`
grid-area: leftside;
`

const ArtCard = styled.div`
background-color: #fff;
  border: 1px solid rgba(0,0,0, 0.08);
  border-radius: 5px;
  margin-bottom: 10px;
`

const UserInfo = styled.div`
	padding: 15px;
	border-bottom: 1px solid rgba(0,0,0, 0.06);
`

const CardBackground = styled.div`
background-image: url('/images/card-bg.svg');
background-repeat: no-repeat;
background-size: cover;
height: 56px;
margin: -15px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;

`

const Photo = styled.div`
background-image: url('/images/photo.svg');
background-position: center;
background-repeat: no-repeat;
width: 70px;
background-color: #fff;
height: 70px;
border-radius: 50%;
border: 2px solid white;
display: inline-block;
margin: -20px 0 10px;
`

const Link = styled.div`
font-weight: 600;
color: rgba(0,0,0,0.9);

`

const AddPhotoText = styled.div`
color: #0a66c2;
font-size: 1.4rem;
font-weight: 600;
margin-top: 5px;
`

const Widget = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0, 0.07);
	a {
		padding: 5px 15px;
		display: block;
		text-decoration: none;
		& > div {
			display: flex;
			justify-content:space-between;
		}
		span {
			display: block;
			color: rgba(0,0,0,0.7);
			font-size: 1.35rem;
			
			&:nth-child(2) {
				font-weight: 600;
				color: #000;
			}
		}
		.batch {
			color: #0a66c2;
			font-weight: 600;
			font-size: 1.3rem;
		}
		&:hover {
			background-color: rgba(0,0,0,0.05);
		}
	}
`

const Item = styled.div`
	border-bottom: 1px solid rgba(0,0,0, 0.07);
	a {
		padding: 15px;
		display: flex;
		text-decoration: none;
		svg {
			color: rgba(0,0,0,0.6);
			margin-right: 5px;
		}
		span {
			color: rgba(0,0,0,0.6);
			font-size: 1.35rem;
			
			&:nth-child(2) {
				font-weight: 600;
				color: #000;
			}
		}
		&:hover {
			background-color: rgba(0,0,0,0.05);
		}
	}
`

const Discover = styled(Item)`
	border-bottom: 1px solid rgba(0,0,0, 0.08);
	a {
		display: block;
		text-align:center;
		font-weight: 600;
		color: rgba(0,0,0,0.6);
		font-size: 1.5rem;
		&:hover {
			background-color: rgba(0,0,0,0.05);
		}
	}
`

export default LeftSide