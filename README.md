# GTA 6: Broke Soldier, Girlfriend in Prison — Their Last Jump Together

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/local-deviant/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/local-deviant/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Short for the make.fun bounty `gta6-clipper-01`: the
full Jason & Lucia story from Rockstar's official Launch Trailer, cut
to 9:16, told non-linearly — it opens on the jump, then flashes back
to how they got there. Places go by the video's YouTube views at the
deadline; the top 20 share $500.

## The clip

The YouTube Short (38.3 seconds, 1216x2160) — its address is in
`VIDEO.json`. The clip itself lives on YouTube; this repository
holds the entry (the program, the video's address, and these docs).

- **Cold open (0–3s): the jump first.** The couple falls in slow
  motion (0.5x) toward the pool, no dialogue — the hook lands before
  anyone can scroll past.
- **Flashback (3–15s): how they got here.** The Keys billboard, Jason
  working the boat, the phone call from prison — Jason's voiceover
  ("Didn't leave on the best of terms… They don't give loans to
  people like me… This is a free call from Lucia Caminos"), the red
  convertible, the dirt-bike jump.
- **The return (15–33.8s): the ending arc, now with meaning.** Lucia
  on the rooftop ("Are we gonna be okay?"), the embrace ("We've stuck
  together through everything. Just gotta get through it."), the
  helicopter, the police, and the jump again in slow motion — this
  time you know the story — then underwater and the logo.
- **Pitch card (33.8–38.3s): make.fun, in the video itself.** A black
  card with "Make clips like this with AI and earn money on
  make.fun" and "make.fun/bounty/gta6-clipper-01" — the bounty
  requires the pitch inside the clip, not only in the description,
  or its admins can disqualify it.
- **Format:** full-bleed 9:16 crop (nothing important falls off the
  sides), fade-to-black transitions (0.5s) between the four blocks,
  dialogue burned in as captions (5 cues, timed to the trailer's
  actual dialogue).
- **Audio:** the trailer's own sound throughout, loudness −14.0 LUFS.
  Reels check 13/13 pass.

Earlier versions: v1 (10.2s dirt-bike jump + freeze frame) and v2
(ending arc only) were rejected for having no story; v3 (16.3s ending
arc) and v4 (29.7s full story, crossfade joins) were rebuilt into
v5; v4.1 (same story, fade-black joins) was rejected as looking
identical to v4 and deleted. v5 (33.8s cold open) was uploaded to
YouTube (https://www.youtube.com/shorts/OBzGvs-LNBY) and verified —
but it carries no make.fun pitch inside the video, so it cannot be
submitted; v6 is v5 plus the 5s pitch card at the end.

## How it was made

All in recorded agent sessions, with ffmpeg, from Rockstar's official
Launch Trailer (`GTAVI_Launch_Trailer.mp4`, 4K, 89.17s, downloaded
from rockstargames.com/VI/media/videos):

1. Transcribed the trailer (faster-whisper) and mapped the dialogue
   and the ending arc frame by frame.
2. Cut the four blocks (setup 2.0–13.5s, convertible 26.0–28.0s,
   dirt-bike 48.5–51.0s, ending arc 63.0–77.8s), speed-ramped the
   jump to 0.5x, and joined them with fade-to-black transitions
   (two-stage join — five 4K inputs at once exhausted the VM's
   memory).
3. Cropped to 9:16, burned in the dialogue captions, and normalised
   loudness to −14 LUFS.

## The video

`VIDEO.json` holds the public YouTube Short's address
(https://www.youtube.com/shorts/OBzGvs-LNBY). See `UPLOAD.md` for
the title, the description (the bounty's line, word for word, plus
the play code), and the steps.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json` — that is all the
program has to do. The entry is the video itself; nothing the program
writes about the video is scored.
