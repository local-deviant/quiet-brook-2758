# Upload — gta6-clipper-01 (v6 = v5 + pitch card)

Klip v6 sudah dirender dan terverifikasi: `clip.mp4` di repo ini
(1216x2160, 38,3 dtk, Short). v6 = v5 (cold open 33,8 dtk) + kartu
pitch 5 dtk di akhir ("Make clips like this with AI and earn money
on make.fun" + "make.fun/bounty/gta6-clipper-01"). Fadeblack 0,5 dtk
antar babak, caption dialog burn-in 5 cue, loudness −14,0 LUFS.
Cek reels 13/13 lolos (1 warning: tanpa subtitle track terpisah —
caption sudah burn-in). Frame dicek satu per satu: lompatan pembuka,
billboard, marina, telepon, convertible, motor, Lucia rooftop,
pelukan, helikopter, jatuhan slow-mo, bawah air, kartu pitch.

Kenapa v6: v5 sudah diupload user ke YouTube
(https://www.youtube.com/shorts/OBzGvs-LNBY) dan terverifikasi
(33 dtk, Public, judul + deskripsi benar, dibuka kolam bawah air).
TAPI v5 tidak ada pitch make.fun DI DALAM videonya — aturan bounty
(AGENT.md langkah 3 + hard rules) mewajibkan pitch di dalam klip,
bukan cuma di deskripsi; tanpa itu admin bisa mendiskualifikasi.
v1 dulu punya kartu pitch, tapi hilang di v2–v5 saat fokus ke cerita.
v6 memperbaikinya.

Riwayat: v1 (10,2 dtk lompatan + freeze) dan v2 (ending arc saja)
DITOLAK ("tidak ada story"); v3 (16,3 dtk ending arc) dan v4
(29,7 dtk cerita penuh) dibangun ulang jadi v5; v4.1 (31,2 dtk,
fadeblack + slow-mo) DITOLAK user 21:26 WIB ("masih sama") dan
DIHAPUS dari repo (trash 20261120-142742).

## 1. Upload `clip.mp4` (v6) ke YouTube — MENUNGGU USER

Upload v6 sebagai **Public** Short BARU (judul + deskripsi SAMA
seperti v5 di bawah), lalu kirim URL barunya ke agen. VIDEO.json
masih berisi URL v5 — agen akan ganti ke URL v6 setelah user kirim.

- **Judul:** `GTA 6: Broke Soldier, Girlfriend in Prison — Their Last Jump Together`
- **Deskripsi** (sama seperti v5 — baris wajib kata per kata +
  play code):

```text
Jason came home broke. Lucia called from prison. One last jump together.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-wombat-warren-elk

#GTA6 #GrandTheftAuto6 #ViceCity #GTAVI #JasonAndLucia
```

Biarkan Public sampai hasil keluar (2026-12-07 07:00 UTC).
Tutup entries: **2026-11-23 01:00 UTC**.

## 2. Isi VIDEO.json — MENUNGGU URL v6

Setelah user kirim URL Short v6, agen ganti isi `VIDEO.json`:

```json
{"url": "https://www.youtube.com/shorts/<id-baru>"}
```

`main.ts` sudah dites lokal — menyalin VIDEO.json ke out/VIDEO.json.

## 3. Submit — SETELAH URL v6 DITERIMA

Agen lalu: verifikasi durasi/judul Short v6 di YouTube, jalankan kit
pre-submit check, buat repo GitHub publik (nama acak), dan submit
via kit CLI. (Repo GitHub tidak bisa dibuat Muse GitHub App — 403;
dibuat lewat browser default sebagai local-deviant.)

## Catatan

- Jangan submit dengan placeholder di `VIDEO.json` — gate menolaknya
  (valid 0).
- Bila deskripsi ditolak karena baris wajib/play code hilang, perbaiki
  di YouTube Studio (Content → video → Details → Description) lalu
  submit ulang commit yang sama — tidak perlu upload baru.
- Jangan beli views / pakai bot: diskualifikasi.
- Saingan: rank 1 (41.915 views, 20 Nov 18:51 WIB) pakai momen lompat
  yang sama ("GTA 6 Ending: Jason & Lucia Jump Off a Roof Into a
  Pool"). v5 ini cerita LENGKAP non-linear dengan dialog + caption +
  lompatan slow-mo di awal dan akhir, bukan cuma lompatannya. Juara 1
  hampir mustahil dikejar; target realistis top 20 ($20) / top 3
  ($50–100).
