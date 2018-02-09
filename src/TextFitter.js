import React from 'react'

export default class TextFitter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			fontSize: props.maxFontSize,
			delta: props.maxFontSize / 2,
		}

		this.process = this.process.bind(this)
	}

	static defaultProps = {
		maxFontSize: 60,
		width: 100,
	}

	componentDidMount() {
		this.process()
	}

	componentDidUpdate() {
		this.process()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.children !== this.props.children) {
			this.setState({
				fontSize: this.props.maxFontSize,
				delta: this.props.maxFontSize / 2,
			})
		}
	}

	process() {
		if (this.state.delta <= 1) return
		if (this.result.offsetWidth > this.props.width) {
			this.setState({
				fontSize: this.state.fontSize - this.state.delta,
				delta: Math.ceil(this.state.delta / 2),
			})
		} else if (this.state.fontSize < this.props.maxFontSize) {
			this.setState({
				fontSize: this.state.fontSize + this.state.delta,
				delta: Math.ceil(this.state.delta / 2),
			})
		}
	}

	render() {
		return (
			<span
				className={this.props.className}
				ref={node => {
					this.result = node
				}}
				style={{
					...this.props.style,
					fontSize: this.state.fontSize,
				}}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</span>
		)
	}
}
