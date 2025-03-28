# シラバス

**制作方針**

* まずはβ版を作ろう
* 何回でも使い回せる、絶対に正しい内容だけで構成しよう
* 最初に用語・Notationを載せる
* 各動画は5分以内
* しゃべる内容を全部決めてから話す
* 各動画を独立させる（他の話をなるべく見なくても大丈夫にしよう）

## 問題設定

1. [x] 意思決定問題と定式化の重要性
2. [ ] マルコフ決定過程

## 最適化

## アルゴリズム

---

## コンパイル周りの補足

To start the slide show:

- `pnpm install`
- マルコフ決定過程の導入：`pnpm dev slides/DecisionMakingOverview`
- visit <http://localhost:3030>

## Github Pagesにビルド

- `pnpm build --base /Lecture-Intro-to-RL-Slidev --out docs`

---

## その他注意

これ参考にしよう：
* スライド: https://sli.dev/demo/starter/1
* コード: https://github.com/slidevjs/slidev/blob/main/demo/starter/slides.md

* PDF吐き出すときは
```
pnpm export --per-slide
```
じゃないとページ番号がバグる．
（ここにもっと情報あるかも：https://sli.dev/features/global-layers ）
