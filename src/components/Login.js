import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { signInAPI } from '../actions'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
  return (
	<Container>
		{ props.user && 
		<Redirect to="/home" />
		}
		<Nav>
			<a href="/">
				<img src="/images/logo.svg" alt="Linkedin Logo" />
			</a>
			<div>
				<JoinBtn>Join Now</JoinBtn>
				<SignBtn>Sign In</SignBtn>
			</div>
		</Nav>
		<Section>
			<Hero>
				<div className="w-55">
					<MainHeading>Welcome to your professional community</MainHeading>
					<Form>
						<GoogleBtn onClick={() => props.signIn()}>
							<div>
								<img src="./images/google-icon.svg" alt="Google Icon" />
								<span>Sign in with Google</span>
							</div>
						</GoogleBtn>
					</Form>
				</div>
				<div className="w-45">
					<img src="/images/hero.svg" className="hero-image" alt="Hero Image" />
				</div>
			</Hero>
		</Section>
	</Container>
  )
}

const Container = styled.div`
	padding: 0 15px;
	max-width: 1128px;
	margin: 0 auto;
`

const Nav = styled.div`
	padding: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	flex-wrap: nowrap;
	& > a {
		width: 135px;
		@media (max-width: 767px) {
			width: 180px;
			padding: 10px 0;
			display: inline-block;
			margin-bottom: 10px;
		}
	}
	& > div {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	@media (max-width: 460px) {
		display: block;
		text-align: center;
	}
`

const JoinBtn = styled.a`
	font-size: 1.8rem;
	border-radius: 5px;
	background-color: transparent;
	color: rgba(0,0,0,0.6);
	cursor: pointer;
	margin-right:15px;
	padding: 8px 10px;
	font-weight: 500;
	transition: 0.5s;
	&:hover {
		background-color: rgba(0,0,0,0.08);
    	color: rgba(0,0,0,0.9);
	}
`

const SignBtn = styled.a`
	font-size: 1.8rem;
	background-color: transparent;
	border-radius: 25px;
	border: 1px solid #0073b1;
	padding: 6px 15px;
	color: #0073b1;
	cursor: pointer;
	font-weight: 500;
	transition: 0.5s;
	&:hover {
		background-color: #0073b1;
		color: #fff;
	}
`
const Section = styled.section`
	display: flex;
	align-items: center;
	padding: 60px 0;
	@media (max-width: 767px) {
		padding: 30px 0;
	}
`

const Hero = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	@media (max-width: 767px) {
		flex-wrap: wrap;
	}
	img {
		margin-left: 20px;
		width: 120%;
		@media (max-width: 1400px) {
			width: 100%;
			margin: 0;
		}
	}
`

const MainHeading = styled.h1`
	color: #8f5849;
	font-weight:300;
	margin-bottom: 30px;
	
`

const Form = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 767px) {
		
	}
`

const GoogleBtn = styled.div`
	display: block;
	cursor: pointer;
	div {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 15px 30px;
		text-decoration: none;
		color: rgba(0, 0, 0, 0.8);
		border-radius: 25px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		img {
			width: 25px;
			margin-right: 10px;
			margin-left: 0;
		}
		&:hover {
			background: rgba(0, 0, 0, 0.05);
		}
	}
	@media (max-width: 767px) {
		margin-bottom: 30px;
	}
`

const mapStateToProps = (state) => {
	return {
		user: state.userState.user
	}
}

const mapDispatchToProps = (dispatch) => ({
	signIn: () => dispatch(signInAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);