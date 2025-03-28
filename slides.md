---
theme: default
highlighter: shiki
transition: slide-left
layout: section
class: 'text-center'
---

# マルコフ決定過程を学ぶモチベ

---
maxDepth: 1
layout: default
---

<Toc />

---

## 社会と意思決定問題

社会の様々なサービスは何らかの意思決定をしている．

<br>

* 動画配信サービス
  * 意思決定：ユーザーの履歴に合わせて動画を推薦
  * 目標：サービスの収益を最大化させる推薦

<img style="position: absolute; top: 150px; right: 80px; width: 130px;" src="./figures/tv_haishin_owarai_man.png">

<br>
<br>

* 医師の診断
  * 意思決定：患者の症状に合わせて治療法を選択
  * 目標：患者の症状の改善

<img style="position: absolute; top: 300px; right: 80px; width: 130px;" src="./figures/doctor_xray_rentogen.png">


<br>

<div style="border: 2px solid #000; padding: 10px; margin-top: 20px; background-color: #ffffe0;">
良い意思決定はサービスの質を向上させる．良い意思決定をするにはどうすればよいだろう？ 🤔
</div>


---

## 意思決定のルール

意思決定は何らかの**ルール**を通じて実現される．

意思決定のルール $\approx$ 「<span style="color: red;">状況</span>に対して<span style="color: blue;">意思決定</span>を返す関数」

<img style="position: absolute; top: 30px; right: 60px; width: 100px;" src="./figures/kandou_movie_eigakan.png">

<div style="border: 2px solid #000; padding: 10px; margin-top: 20px; background-color: #f5f5f5;">

**ルールの例** （映画の推薦サービス）

* 短期的なルール：<span style="color: red;">ユーザーは昨日ホラー映画を見た．</span>
→ <span style="color: blue;">次回もホラー映画を推薦しよう．</span>
* 長期的なルール：<span style="color: red;">ホラーを推薦しても飽きそう．</span>
→ <span style="color: blue;">ホラーだけでなく，流行の映画も推薦しよう．</span>

</div>

<br>
<br>

<v-click>

<div style="border: 2px solid #000; padding: 10px; margin-top: 20px; background-color: #ffffe0;">

* 講義では「短期と長期，どちらを優先するべきか？(what)」は学ばない．サービスの運営者次第．\
（講義終盤で扱うかも）
* 講義では **「意思決定のルールをどうやって設計するのか？(how)」** を扱う．

</div>

</v-click>

---

## 意思決定のルールの難しさと定式化の重要性

短期よりも長期の方が一般に実現が難しい．

* 短期的なルールの実装は簡単．ユーザーが今まで見てたジャンルの動画を見せれば良い．

```python

def recommend_movie(previous_movie_type):
    # 直前の映画のジャンルと同じジャンルの映画を推薦
    next_movie = get_random_movie(previous_movie_type)
    return next_movie
```

<br>

<v-click>

* 長期的なルールの実装が難しい．１年間でのユーザーの満足度を最大化させるには？

```python

def recommend_movie(movie_history):
    # ユーザーの視聴履歴はあるけど，何をすれば満足度が最大化される？
    next_movie = ???
    return next_movie
```

</v-click>

<v-click>

<div style="border: 2px solid #000; padding: 10px; margin-top: 20px; background-color: #ffffe0;">

ふわふわした要件では，意思決定のルールを設計するのは難しい．（🤔 そもそも短期と長期って何？）\
💡そこで，**マルコフ決定過程**を使って意思決定問題を定式化＆意思決定のルールを計算しよう．
</div>

</v-click>

---

## マルコフ決定過程の実用例

<br>

<img style="position: absolute; top: 50px; right: 60px; width: 200px;" src="./figures/multi-class.png">

<figure style="position: absolute; top: 200px; right: 80px; width: 130px; text-align: center;">
  <img src="./figures/Cart-pendulum.svg.png" style="width: 100%;">
  <figcaption style="font-size: 0.5em; word-wrap: break-word; text-align: center;">
    <a href="https://en.wikipedia.org/wiki/Inverted_pendulum" target="_blank">https://en.wikipedia.org/wiki/Inverted_pendulum</a>
  </figcaption>
</figure>

<img style="position: absolute; top: 220px; right: 300px; width: 170px;" src="./figures/car_kousokudouro.png">

* 多クラス分類問題 （他講義で説明）
* システムの制御 （制御工学の線形二次レギュレータなど．他講義で説明）
* ボートフォリオ最適化問題 <span style="font-size: 70%;">[Bäuerle+, 2011]</span>
* 高速道路の舗装問題 <span style="font-size: 70%;">[Puterman+, 1994]</span>
* テレビゲーム・囲碁・将棋
* 対話システム （ChatGPTとか）
* 他多数．調べてみてね．

<br><br>

<div style="border: 2px solid #000; background-color: #ffffe0; text-align: center;">

💪 マルコフ決定過程の応用先は多岐にわたる！正しい知識を身に着けよう．

</div>

<!-- 引用元 -->
<div style="font-size: 0.7em; text-align: left; position: absolute; bottom: 10px; left: 10px;">

* [Bäuerle+, 2011] Markov Decision Processes with Applications to Finance
* [Puterman+, 1994] Markov Decision Processes: Discrete Stochastic Dynamic Programming

</div>

---
theme: default
highlighter: shiki
transition: slide-left
layout: section
class: 'text-center'
---

# マルコフ決定過程

---
maxDepth: 1
layout: default
---

<Toc />

---

## マルコフ決定過程 （Markov Decision Process）

以降はMarkov Decision Processを略して**MDP**と呼ぶ

* 概要：意思決定の流れをシンプルに記述した数理モデルのこと．
* モチベ：最適化問題として，効率的に意思決定ルールを計算できる点で強力．
  * 逆に適切な定式化がなければ，効率的な意思決定ルールの計算は難しい（他講義で学ぶ）

<v-click>
<div style="border: 2px solid #000; padding: 10px; margin-top: 20px; background-color: #ffffe0;">

**MDPの定義**：
次の４つの要素からなるタプル $(\mathcal{S}, \mathcal{A}, P, r)$ のこと

$$
\begin{aligned}
  &状態集合\; \mathcal{S} &&｜現在の状況を表す状態の集合\\
  &行動集合\; \mathcal{A} &&｜選択できる意思決定の集合\\
  &遷移確率関数\; P: \mathcal{S} \times \mathcal{A} \to \Delta(\mathcal{S}) &&｜各状態と行動について，次の状態遷移を決める関数\\
  &報酬関数\; r: \mathcal{S} \times \mathcal{A} \to \mathbb{R}&&｜各状態行動の「良さ」を表現する関数\\
\end{aligned}
$$

</div>

<div style="border: 2px solid #000; padding: 10px; margin-top: 20px;">
💡次のスライド以降で定義の直感を学ぶが，頻出なので基本的に暗記してほしい．

</div>

</v-click>

---

## MDPを使った意思決定の流れ

