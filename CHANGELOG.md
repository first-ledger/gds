# GDS Changelog

# [1.0.0-b.3](https://github.com/first-ledger/gds/compare/gds@1.0.0-b.2...gds@1.0.0-b.3) (2025-04-24)


### Bug Fixes

* export built themes ([b8337b3](https://github.com/first-ledger/gds/commit/b8337b3f376c07f2f0d5fdb7f23145119f68c595))

# [1.0.0-b.2](https://github.com/first-ledger/gds/compare/gds@1.0.0-b.1...gds@1.0.0-b.2) (2025-04-24)


### Bug Fixes

* update tokens ([9b30734](https://github.com/first-ledger/gds/commit/9b30734b61898a6ea6b5fe6f1dc9eb0716677eb2))

# 1.0.0-b.1 (2025-04-24)


### Bug Fixes

* add keyed colors and remove exclusive color tokens ([d9d351c](https://github.com/first-ledger/gds/commit/d9d351c5a13e8bd20d76a4ffe042071194a3b2c2))
* add npm public visibility option ([cb8627f](https://github.com/first-ledger/gds/commit/cb8627f694777b815c6859e6f843a4bf3482dc3a))
* add pnpm support to setup action ([5c193dc](https://github.com/first-ledger/gds/commit/5c193dcbf15abbf26b333156ebc903f99e4235c2))
* add pnpm version number ([45540b6](https://github.com/first-ledger/gds/commit/45540b63150fa7a6118725ac61b85bdfbf24541e))
* add scope to package for publishing ([a8a54af](https://github.com/first-ledger/gds/commit/a8a54af44f4d2ab9c2d5d65e3b466c6ca5ac5028))
* add scope to publish action ([9fa683b](https://github.com/first-ledger/gds/commit/9fa683ba29ae5e0503d64bcf1fffb2a100a3df95))
* add secrets to the top of the gha workflow ([b1f1915](https://github.com/first-ledger/gds/commit/b1f1915f32182c949315580800568390c733714d))
* add semantic release ([15fd9b6](https://github.com/first-ledger/gds/commit/15fd9b67e5bd6e2ae86a8f4c4ac4bdc91b260cf1))
* another organization and branch fix in github action ([6f548ca](https://github.com/first-ledger/gds/commit/6f548ca7e5d14fbfd32de67ef38072d9d95f59cb))
* branch name ([4d25381](https://github.com/first-ledger/gds/commit/4d25381a5e0228c241a64b2b3046deae421bc242))
* bump package version number ([77d6133](https://github.com/first-ledger/gds/commit/77d61331f7abbc90b8f11ffaad5d3e89b47b807b))
* change workflow action to explicit org and scope ([9b3e7c1](https://github.com/first-ledger/gds/commit/9b3e7c1bc00fc0400a7c4e14217efc61589e0918))
* error in workflow, typo ([3e2d554](https://github.com/first-ledger/gds/commit/3e2d554f63834146f280532afaa89ddc5e3f965f))
* make sure variant fontFamilies are unset ([8599e6b](https://github.com/first-ledger/gds/commit/8599e6b4020d60db1578010e934d29ff2858983d))
* new approach to get the ref branch ([6c69309](https://github.com/first-ledger/gds/commit/6c69309189193115183dc3e6de019e414efdd394))
* remove dependencies and move the devDependencies ([c4d4187](https://github.com/first-ledger/gds/commit/c4d4187e9f46a0b0634afaaa8d72c874ff56c7fd))
* remove typography since objects are not recognized in tamagui tokens, restructure create tokens function ([8503305](https://github.com/first-ledger/gds/commit/85033050f4833cddeff76c09ba7c3359ec1ff2e8))
* remove verify check ([abec3fa](https://github.com/first-ledger/gds/commit/abec3fa870db8e82b5228c4180e92d7981b3a715))
* remove wallet.json ([ec75970](https://github.com/first-ledger/gds/commit/ec7597027f89f1f599b9fb49b91119bf84820789))
* revert branch tag and naming logic ([36e92fe](https://github.com/first-ledger/gds/commit/36e92fe97be69f23d7b43c84f5f1533d9a23c7f0))
* revise size to integers ([1c60c6b](https://github.com/first-ledger/gds/commit/1c60c6bb32d666543d8a3a66171b127e718060c7))
* secrets not acceptable as workflow primitive ([56a7fae](https://github.com/first-ledger/gds/commit/56a7fae3d07fa026a64cd4a4d48f2777348398de))
* skip env file injects if env_file is set to false, add npm install before publish ([9bd6b1e](https://github.com/first-ledger/gds/commit/9bd6b1e21d116a78d3e0b4fff729ddf3b1ef976d))
* sync with ci branch ([8aa074c](https://github.com/first-ledger/gds/commit/8aa074c410e0aa2c111ad14793e2afc0204b709b))
* update branch name if it is a tag ([caefbcf](https://github.com/first-ledger/gds/commit/caefbcf4070bd2e36ed57aa69dd2a535939970fb))
* update branch name logic ([ef7bdf1](https://github.com/first-ledger/gds/commit/ef7bdf142496ffdd1741680730c7b9da7dfa511d))
* update font. blur, border, scale sync issues ([067215f](https://github.com/first-ledger/gds/commit/067215f43d3ba10c247495e5f4908ea0a382d1b5))
* update scripts to work with keyed themes ([df7dec5](https://github.com/first-ledger/gds/commit/df7dec5c87fc0c53e3bf825886fdd371da3f504a))
* update workflow with better ordering ([df4b3a6](https://github.com/first-ledger/gds/commit/df4b3a6d139711608e00dcd541a72fd0199bf819))


### Features

* add font to design tokens ([d4c0d48](https://github.com/first-ledger/gds/commit/d4c0d4814ea67bf18581ee0e3082c31220ee6dc3))
* add font variants for tamagui ([1590724](https://github.com/first-ledger/gds/commit/1590724ab9a44f5d6fd30e34eff2b3a7376da293))
* initialize package, add git action for automated npm publishing, update scripts for compatibility with our various modes ([32fbc70](https://github.com/first-ledger/gds/commit/32fbc70146cd92281a633dc85e174cee5b533bc5))
* tamagui fonts ([d1d7a03](https://github.com/first-ledger/gds/commit/d1d7a0381858dc76699f90a0457ed0ef0a02b7ac))
