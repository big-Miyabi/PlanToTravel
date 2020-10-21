/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap')

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// どちらか一方にコメントアウトをして使う
// testsを使いたい場合(バック側)
// require('./tests/App')

// Reactの実装状態を確認したい場合(フロント側)
require('./src/App')
