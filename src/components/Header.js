import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from '../assets/images/nav-home.svg'
import { ReactComponent as JobsIcon } from '../assets/images/nav-jobs.svg'
import { ReactComponent as MessagingIcon } from '../assets/images/nav-messaging.svg'
import { ReactComponent as NetworkIcon } from '../assets/images/nav-network.svg'
import { ReactComponent as NotificationsIcon } from '../assets/images/nav-notifications.svg'
import { ReactComponent as ArrowDown } from '../assets/images/arrow-down.svg'
import { ReactComponent as WorkIcon } from '../assets/images/nav-work.svg'


const Header = () => {
  return (
	<ContainerFluid>
		<Container>
			<Content>
				<Logo>
					<a href="./home">
						<img src="./images/mini-logo.svg" alt="Linkedin" />
					</a>
				</Logo>
				<Search>
					<div>
						<input type="text" name="search" placeholder="Search"/>
					</div>
					<SearchIcon>
						<img src="./images/search-icon.svg" alt="search" />
					</SearchIcon>
				</Search>
				<Nav>
					<NavList>
						<NavItem className="active">
							<a href="">
								<span>
									<HomeIcon />
									<span>Home</span>
								</span>
							</a>
						</NavItem>
						<NavItem>
							<a href="">
								<span>
									<NetworkIcon />
									<span>My Network</span>
								</span>
							</a>
						</NavItem>
						<NavItem>
							<a href="">
								<span>
									<JobsIcon />
									<span>Jobs</span>
								</span>
							</a>
						</NavItem>
						<NavItem>
							<a href="">
								<span>
									<MessagingIcon />
									<span>Messaging</span>
								</span>
							</a>
						</NavItem>
						<NavItem>
							<a href="">
								<span>
									<NotificationsIcon />
									<span>Notifications</span>
								</span>
							</a>
						</NavItem>
						<User>
							<a href="">
								<span>
									<img src="./images/user.svg" alt="user" />
									<span>
										Me
										<ArrowDown />
									</span>
								</span>
							</a>
							<SignOut>
								<a href="">
									Sign Out
								</a>
							</SignOut>
						</User>
						<Work>
							<a href="">
								<span>
									<WorkIcon />
									<span>
										Work
										<ArrowDown />
									</span>
								</span>
							</a>
						</Work>
					</NavList>
				</Nav>
			</Content>
		</Container>
	</ContainerFluid>
  )
}

const ContainerFluid = styled.div`
	background-color: #fff;
	border-bottom: 1px solid rgba(0,0,0,0.08);
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 100;
`

const Container = styled.div`
	padding: 0 15px;
	max-width: 1128px; 
	margin: 0 auto;
`

const Content = styled.div`
	display: flex;
	align-items: center;
	/* padding: 5px 0; */
`

const Logo = styled.span`
	font-size: 0;
	line-height: 0;
	margin-right: 8px;
`

const Search = styled.div`
	position: relative;
	flex-grow: 1;
	input {
		border: none;
		box-shadow: none;
		background-color: #eef3f8;
		padding: 0 8px 0 40px;
		width: 210px;
		height: 34px;
		font-weight: 400;
		font-size: 1.4rem;
		outline: 0;
		border-radius: 0.4rem;
	}
`

const SearchIcon = styled.div`
	pointer-events: none;
	position: absolute;
	top: 0;
	bottom: 0;
	display: inline-flex;
	width: 40px;
	justify-content: center;
	img {
		width: 16px;	
	}
`

const Nav = styled.div`
	margin-right: auto;
	display: block;
	position: relative;
	@media (max-width: 900px) {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	}
`

const NavList = styled.ul`
	list-style: none;
`

const SignOut = styled.div`
	position: absolute;
	top: 55px;
	border-radius: 5px;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,0.1);
	transition: display 1s delay 1s;
	display: none;
	a {
		color: rgba(0,0,0,0.6);
		text-decoration:none;
		font-size: 1.4rem;
		min-height: auto!important;
		min-width: auto!important;
		padding: 5px 10px;
		&:hover {
			color: rgba(0,0,0,0.8);
		}
	}
`

const NavItem = styled.li`
	display: inline-flex;
	margin: 0 1px;
	&.active {
		a {
			svg {
				fill: rgba(0,0,0,0.8);
			}

			span {
				fill: rgba(0,0,0,0.8);
			}
			&::after {
				width: 100%;
			}
		}
	}
	a {
		display: flex;
		align-items: center;
		min-height: 52px;
		min-width: 80px;
		color: rgba(0,0,0,0.8);
		text-decoration:none;
		justify-content:center;
		text-align: center;
		position: relative;
		& > span {
			line-height: 1;
			svg {
				fill: rgba(0,0,0,0.6);
				transition: 0.5s;
			}

			span {
				display: block;
				font-size: 1.3rem;
				transition: 0.5s;
			}
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			height: 2px;
			width: 0;
			display: inline-block;
			margin: auto;
			transition: 0.5s;
			background: rgba(0,0,0,0.8);
		}

		&:hover {
			svg {
				fill: rgba(0,0,0,0.8);
			}

			span {
				fill: rgba(0,0,0,1);
			}

			/* &::after {
				width: 100%;
			} */
		}
		
	}
`

const User = styled(NavItem)`
	position: relative;
	a {
		& > span {
			& > img {
				border-radius: 50%;
				width: 24px;
			}
			span {
				display: flex;
				align-items: center;
				svg {
					transform:scale(0.8);
					height: 12px;
				}
			}
		}
	}
	&:hover {
			${SignOut} {
				display: block;
			}
	}
`

const Work = styled(NavItem)`
	position: relative;
	border-left: 1px solid rgba(0,0,0,0.08);
	a {
		& > span {
			& > img {
				
			}
			span {
				display: flex;
				align-items: center;
				svg {
					transform:scale(0.8);
					height: 12px;
				}
			}
		}
	}
`

export default Header