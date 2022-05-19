# 2020 年度 HAL インターン研修

![screenshots](https://user-images.githubusercontent.com/47961006/99709042-016f9f00-2ae2-11eb-99c2-352c9d3f32cb.png)

## 目次

-   [システム概要](#システム概要)
-   [システム詳細](#システム詳細)
-   [開発環境](#開発環境)
-   [動作環境](#動作環境)
    -   [構築手順](#構築手順)

## システム概要

皆さんは旅行に行った時このような経験はありませんか？

-   自分の時間や予算に合わせて予定を組むのが面倒臭い
-   せっかく綿密に計画を立てたのに雨が降っておじゃんになってしまった
-   下調べが甘く、思わぬ出費で予算オーバーしてしまった etc.

こういった時に「**他人の行程表を参考にしたい!!**」という思いで作ったサービスが今回の"PLAN TO TRAVEL"です

## システム詳細

-   旅先の行程表を他人と共有できる
-   旅行前に友達と予定を組む目的でも使える
-   天気や人数、移動手段などで絞り込み検索をして行程表を探すことができる
    -   他人の行程表を丸々参考にできるので下調べが少なく済む！
-   余計な機能を加えず、シンプルで直感的操作が可能
    -   「行程表の共有」に主軸を置いたサービス

## 開発環境

-   VSCode
-   Google Chrome バージョン: 86.0.4240.111（Official Build） （x86_64）

## 言語 / フレームワーク / API

-   React
    -   バージョン: 16.13.1
-   Laravel
    -   バージョン 7.28.3
-   PHP
    -   バージョン: 7.3.11
-   TypeScript
-   SCSS
-   Google Maps APIs
-   Firebase Storage

## 動作環境

スマートフォンサイズに対応

### 構築手順

1. `git clone [URL]`
2. `cd [クローンしたディレクトリ名]`
3. `git checkout develop`
    - ∵ develop ブランチが最新のものが反映されているブランチになる
4. `composer install`
5. `npm install`
6. プロジェクトのディレクトリ直下に`.env`ファイルを作成

-   DB 関連設定を自分の環境に合うように変更
-   API の KEY を記述
    -   `MIX_GOOGLE_MAPS_API`
    -   `MIX_WEATHER_API`

7. `php artisan serve`でローカルホスト起動
8. 別のターミナルタブで`npm run watch`起動

-   react や typescript, sass の内容を js と css にコンパイルする

9. [ローカルホスト](http://127.0.0.1:8000)を開く
10. 検証を開いて画面サイズをスマートフォンのものにする

-   今回のサービスはスマホを想定して作っているため、スタイリングに関してはスマホ以外に対応してません
-   画面設計やスタイリングは iPhoneX を想定して行ったため、スマフォサイズなら一応レスポンシブで全て対応していますが、iPoneX(375\*812)で閲覧することをおすすめします

#### `composer install`時にエラーが起きる

`laravel your php version does not satisfy that requirement`というエラーが起きた場合、php のバージョンの差異によるものなので、php のバージョンを 7.3 以降のものにしてください。

### Laravel コーディング規約

#### ファイル名について

| 種類           | 記法             | 複数 or 単数 | 例                                                         |
| -------------- | ---------------- | ------------ | ---------------------------------------------------------- |
| テーブル名     | スネークケース   | 複数         | users_table                                                |
| モデル名       | アッパーキャメル | 単数         | UserData                                                   |
| migration 名   | スネークケース   | 単数         | xxx_crate_users_table<br/>※ xxx には作成日時が自動で入る。 |
| seeder 名      | アッパーキャメル | －－－       | UsersTableSeeder                                           |
| Controllers 名 | アッパーキャメル | －－－       | UserDataController                                         |
| views 名       | スネークケース   | －－－       | users_add                                                  |

#### その他

| 種類           | 記法             | 例                        |
| -------------- | ---------------- | ------------------------- |
| クラス名       | アッパーキャメル | UserData<br/>ItemList     |
| メソッド名     | ローワーキャメル | userData<br/>itemList     |
| 変数名         | スネークケース   | $user_data<br/>$item_list |
| ディレクトリ名 | アッパーキャメル | UserData<br/>ItemList     |
| ファイル名     | スネークケース   | user_data<br/>item_list   |

参考元: [【laravel】laravel の命名規則 - Qiita](https://qiita.com/gone0021/items/e248c8b0ed3a9e6dbdee)

### React コーディング規約

#### ファイル名について

拡張子が tsx のものやコンポーネントファイルに関してはアッパーキャメルを使う

-   例：UserData.js, PostForm.tsx
    -   class User extends React.Component {}
    -   const App: FC = () => {}

それ以外の通常の ts ファイルや js ファイルなどに関してはローワーキャメルを使う

-   例：userActions.ts, userReducer.ts, firebase.ts

#### html タグの id と class について

-   id はスネークケース
    -   例: register_username, login_password
    -   BEM 設計を使うため、style 関連で id を使うことはほとんどない
-   class は BEM 設計に則って記述
    -   例: register-form\_\_username,

#### 変数・関数名について

ローワーキャメルを使う
例：const userData = "hoge"
const createUser = () => { }
const [state,setState] = useState("")

#### type, interface について

アッパーキャメルを使う
例:

```
interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

type ItemList = {
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  label: string;
  navigation: () => void;
};
```

### SCSS コーディング規約

BEM 設計に従って記述する。

-   参考リンク
    -   [HTML/SCSS BEM 設計をワイヤーフレームを使って解説してみる - Qiita](https://qiita.com/mame_hashbill/items/c5b09461d7acfce047fa)
    -   [BEM 設計 うわああああ三(卍^o^)卍ってならない BEM の書き方をワイヤーフレーム使って整理するぞ（その 1） - Qiita](https://qiita.com/mame_hashbill/items/bf541f795533b40e3cdc)
    -   [一番詳しい CSS 設計規則 BEM のマニュアル - Qiita](https://qiita.com/Takuan_Oishii/items/0f0d2c5dc33a9b2d9cb1#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%A7%E8%A8%98%E8%BF%B0%E3%81%99%E3%82%8B)
