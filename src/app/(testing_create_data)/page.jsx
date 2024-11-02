"use client";

import { useRef, useState } from "react";

export default function TestingPage() {
	const [namaBarang, setNamaBarang] = useState("");
	const [hargaBarang, setHargaBarang] = useState("");
	const [message, setMessage] = useState("");

	const namaBarangRef = useRef();
	const hargaBarangRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://127.0.0.1:8000/api/item-create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ nama_barang: namaBarang, harga_barang: Number(hargaBarang) }),
			});
			if (!response.ok) {
				if (response.status == 422) {
					const errorValidate = await response.json();
					setMessage(errorValidate.message);
				}
			} else {
				const data = await response.json();
				setMessage(data.message);
			}
		} catch (error) {
			console.error("Error posting data:", error);
			setMessage("Gagal mengirim data");
		} finally {
			namaBarangRef.current.value = "";
			hargaBarangRef.current.value = "";
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="w-full h-screen flex justify-center items-center gap-3">
				<input
					type="text"
					name=""
					className="border border-slate-300 rounded-md px-4 py-2"
					placeholder="Nama Barang"
					onChange={(e) => setNamaBarang(e.target.value)}
					ref={namaBarangRef}
				/>
				<input
					type="number"
					name=""
					placeholder="Harga Barang"
					className="border border-slate-300 rounded-md px-4 py-2"
					onChange={(e) => setHargaBarang(e.target.value)}
					ref={hargaBarangRef}
				/>
				<button className="border border-slate-300 rounded-md px-4 py-2" type="submit">
					Kirim
				</button>
				<span className="text-white">{message}</span>
			</div>
		</form>
	);
}
