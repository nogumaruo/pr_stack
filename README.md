# PR Stack demo

GitHub のスタックされたプルリクエストを試すための最小リポジトリです。

## このデモのスタック

1. `feat/domain-greeting` — `Greeting` 型とドメイン関数
2. `feat/api-greeting` — 挨拶を返す API 層
3. `feat/ui-greeting` — API の結果を表示する UI 層

各 PR は、ひとつ下のブランチを base にします。GitHub の PR 画面で下から上へレビューし、`gh stack` で同期・再構成を試します。

## ローカルでの確認

```bash
gh extension install github/gh-stack
gh stack checkout <stack-number-or-pr-number>
gh stack view
```

> GitHub Stacked PRs は Public Preview です。