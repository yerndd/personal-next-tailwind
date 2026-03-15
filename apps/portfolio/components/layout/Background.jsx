import Image from 'next/image'

const Background = () => {
	return (
		<>
			<div id="background-big">
				<Image id="big-1" src="/img/big-1.png" alt="big-1" width={0} height={0} />
				<Image id="big-2" src="/img/big-2.png" alt="big-2" width={0} height={0} />
				<Image id="big-3" src="/img/big-3.png" alt="big-3" width={0} height={0} />
				<Image id="big-4" src="/img/big-4.png" alt="big-4" width={0} height={0} />
			</div>
			<div id="background-small">
				<div id="small-1" className="blue" />
				<div id="small-2" className="dark" />
				<div id="small-3" className="red" />
				<div id="small-4" className="green" />
				<div id="small-5" className="orange" />
				<div id="small-6" className="blue" />
				<div id="small-7" className="light" />
				<div id="small-8" className="dark" />
				<div id="small-9" className="red" />
				<div id="small-10" className="orange" />
				<div id="small-11" className="green" />
				<div id="small-12" className="red" />
				<div id="small-13" className="blue" />
				<div id="small-14" className="orange" />
				<div id="small-15" className="dark" />
			</div>
		</>
	)
}

export default Background