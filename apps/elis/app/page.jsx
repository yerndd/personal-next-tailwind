'use client'
import { useState } from 'react'
import Image from 'next/image'

/**
 * @typedef {0 | 1 | 2} Stage
 */

/**
 * @typedef {null | 'first' | 'second'} ModalState
 */

/**
 * @typedef {'default' | 'expanded' | 'final'} Modal2State
 */

/**
 * Interactive experience for Elis.
 *
 * @returns {JSX.Element}
 */
const Page = () => {
	const [stage, setStage] = useState(0)
	const [modal, setModal] = useState(null)

	/** @type {[Modal2State, Function]} */
	const [modal2State, setModal2State] = useState('default')

	// tracks total object-4 clicks so close→reopen goes to modal 2
	const [object4Count, setObject4Count] = useState(0)

	const handleObject1Click = () => setStage(1)
	const handleObject2Click = () => setStage(2)

	const handleObject4Click = () => {
		const next = object4Count + 1
		setObject4Count(next)
		if (next === 1) {
			setModal('first')
		} else {
			setModal('second')
		}
	}

	const handleCloseModal = () => setModal(null)

	const handleObject6Click = () => {
		if (modal2State === 'default') {
			setModal2State('expanded')
		} else if (modal2State === 'expanded') {
			setModal2State('final')
		}
	}

	// ── Stage 0 — centered object-1.jpg with text below ──
	if (stage === 0) {
		return (
			<main className="el-stage">
				<div className="el-center">
					<button
						className="el-img-btn"
						onClick={handleObject1Click}
						aria-label="Go to next stage"
					>
						<Image
							src="/img/object-1.jpg"
							alt="Object 1"
							width={180}
							height={180}
							priority
							className="el-img el-img--hover"
						/>
					</button>
				</div>
				<p className="el-caption">
					Hai el, Happy Birthday!<br />
					A bit late isn't it? but i hope its still special for you &lt;3
				</p>
			</main>
		)
	}

	// ── Stage 1 — object-2.jpg center with text, object-3.jpg crawling bottom ──
	if (stage === 1) {
		return (
			<main className="el-stage">
				<button
					className="el-img-btn"
					onClick={handleObject2Click}
					aria-label="Go to next stage"
				>
					<Image
						src="/img/object-2.jpg"
						alt="Object 2"
						width={180}
						height={180}
						priority
						className="el-img el-img--hover"
					/>
				</button>
				<p className="el-caption">
					Before you&apos;re getting your gift.<br />
					Here&apos;s a flower for a you, looks cute just like you.
				</p>
				<div className="el-crawler">
					<Image
						src="/img/object-3.jpg"
						alt="Object 3"
						width={120}
						height={120}
						className="el-crawler-img"
					/>
				</div>
			</main>
		)
	}

	// ── Stage 2 — text + object-4; modals overlay this screen ──
	return (
		<main className="el-stage">
			<p className="el-caption">
				Oh no, mofusand nya dudukin kadomuuuuuu!<br />
				Pencet mofusandnya biar dia pergi :(
			</p>
			<button
				className="el-img-btn"
				onClick={handleObject4Click}
				aria-label="Shoo the cat"
			>
				<Image
					src="/img/object-4.jpg"
					alt="Object 4"
					width={200}
					height={200}
					priority
					className="el-img el-img--hover"
				/>
			</button>

			{/* Modal 1 — object-5 centered, click it to close and return to stage 2 */}
			{modal === 'first' && (
				<div className="el-modal-overlay el-modal-overlay--dark">
					<div className="el-modal-card">
						<button
							className="el-img-btn"
							onClick={handleCloseModal}
							aria-label="Close"
						>
							<Image
								src="/img/object-5.jpg"
								alt="Object 5"
								width={320}
								height={320}
								priority
								className="el-img el-img--hover"
							/>
						</button>
						<p className="el-caption">
							Dipantatin karna diusir huft.
						</p>
					</div>
				</div>
			)}

			{/* Modal 2 — three sub-states: default → expanded → final */}
			{modal === 'second' && (
				<div className="el-modal-overlay el-modal-overlay--dark">
					<div className="el-modal-card el-modal-card--large">

						{/* default: top text + object-6 */}
						{modal2State === 'default' && (
							<>
								<p className="el-caption el-caption--modal-top">
									Matcha Latteeee fufufu, aku tau kamu suka matcha banget
								</p>
								<button
									className="el-img-btn"
									onClick={handleObject6Click}
									aria-label="Read message"
								>
									<Image
										src="/img/object-6.jpg"
										alt="Object 6"
										width={220}
										height={220}
										priority
										className="el-img el-img--hover"
									/>
								</button>
							</>
						)}

						{/* expanded: object-6 small + long text */}
						{modal2State === 'expanded' && (
							<>
								<button
									className="el-img-btn"
									onClick={handleObject6Click}
									aria-label="Continue"
								>
									<Image
										src="/img/object-6.jpg"
										alt="Object 6"
										width={120}
										height={120}
										priority
										className="el-img el-img--transition el-img--hover"
									/>
								</button>
								<div className="el-modal-long-text">
									<p className="el-caption">
										Hepi birthday ya eliiii :p, just so you know,<br />
										aku uda kangen kamuuu banget.
									</p>
									<p className="el-caption">
										My favorite person just turn 23,<br />
										aku seneng banget, walaupun kamu gamau ketemu aku di hari h,<br />
										tapi aku selalu bersyukur sama tuhan kamu selalu dikasih happiness.
									</p>
									<p className="el-caption">
										Aku berdoa selalu biar kamu selalu diberi jalan yang indah.<br />
										May you still be the kindest, the orang yang paling lembut di dunia ini xixi.<br />
										selalu diberi kesehatan, tentunya diberi langkah yang gampang tiap harinya.<br />
										langkah yang gampang buat hubungan kita juga hihihi
									</p>
									<p className="el-caption">
										Gak kerasa udah 5 bulan kita pacaran (iya kita pacaran, aku gamau tau huft).<br />
										walaupunnn jalannya gak gampang, aku bersyukur aku dan kamu masih tetep diberi<br />
										kasih sayang buat satu sama lain. kasih sayang pastinya dari Tuhan, gamungkin dari yang lain.<br />
										semoga kita selalu kuat ya hadepin semuanya bareng bareng.
									</p>
									<p className="el-caption">
										Udah itu aja, may this birthday be your best birthday.<br />
										I love you cantik. I did, I do, and always will do
									</p>
								</div>
							</>
						)}

						{/* final: only the second long text, no image */}
						{modal2State === 'final' && (
							<div className="el-modal-long-text">
								<p className="el-caption">
									Wkwkwk, ini tambahan dari aku (aku yang sekarang), dulu kita lucu ya.<br />
									aku masih merasa aneh aja how we change. gak kepikiran juga ternyata aku udah digantiin sama orang lain wkwk<br />
									Aku gak akan nyalahin kamu karena berubah, i did too, mungkin aku juga berubah karena desperate for this to work
								</p>
								<p className="el-caption">
									Maafin aku ya pengen hapus semuanya (what i did last night), aku gak pengen kamu kenang aku dan apapun yang aku<br />
									lakukan (ini alesan egois sebenernya), aku gak pengen kamu kenang aku yang baik baiknya wkwk, karna aku tau semua<br />
									kenangan baik itu percuma. aku udah benci sama semua kenangan itu wkwk, maaf ya. aku baru pertama kali ini di usir<br />
									segininya wkwkwk, aku gak expect se sakit ini, ini sakit hatiku yang paling parah, makanya aku benci semuanya wkwk
								</p>
								<p className="el-caption">
									aku yakin aku adalah orang yang paling kamu benci sekarang. apapun itu, aku gak bisa benci sama kamu wkwk, kamu<br />
									beneran udah jadi orang yang aku paling sayang di muka bumi ini, aku udah gapeduli dengan semua baik buruk masa<br />
									lalu, aku udah siap sayangin kamu sampe ujung hidupku wkwk.
								</p>
								<p className="el-caption">
									hari minggu ini aku gak berenti nangis dan ketawa sendiri, semua kenangan kita selalu relapse di kepalaku, aku udah<br />
									sampai mohon mohon sama Tuhan buat udah cukup aku udah gak kuat. Aku kalah sama keadaan. Aku nyerah sama<br />
									situasi. tapi tetep, sayangku ke kamu gak berubah wkwk, aku ngecek telegram tiap 5 menit sekali buat cari tau kamu<br />
									online apa gak, ngeliat fotomu di ig, ngeliat album buat sisa fotomu yang ada (most of it is gone already karna aku<br />
									hapus chat wa, nyesal, banget, aku gak tau kalau fotomu juga hilang). relapsing chat chat yang udah aku love,<br />
									semuanya yang kita laluin, benci semuanya, tapi sekaligus sayang banget dengan semuanya.
								</p>
								<p className="el-caption">
									Im sorry aku banyak salah ke kamu, im sorry i take your first time in many things. makasih ya udah jadi seseorang<br />
									yang udah nerangin hidupku jadi seterang itu, aku percaya kalau kamu datang ke hidupku dari Tuhan. sampe<br />
									sekarang pun aku masih percaya Tuhan ga bikin kamu dateng buat jadi pelajaran, tapi buat selamanya, memang<br />
									jalannya aja yang berat, tapi yang aku percaya cuman Tuhan, dan pasti jalannya baik kok buat kita. kalau memang ternyata<br />
									we still meant to be, aku siap ninggalin semua kenangan buruknya dan mulai ulang lagi sama kamu. anehnya aku masih berharap<br />
									kamu juga mikir gitu wkwk.
								</p>
								<p className="el-caption">
									ok last thing, i love you, and always, more than anyone in this world
								</p>
							</div>
						)}

					</div>
				</div>
			)}
		</main>
	)
}

export default Page
