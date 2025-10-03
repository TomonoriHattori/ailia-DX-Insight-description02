# 合成音声を生成する
チャットボックスに入力した文書を元にAIによる画像生成を行うことができます。<br>
また、ailia DX Insightでは生成された画像を編集し、より望むものに近づけることができる他、著作権保護や改ざん防止の為にウォーターマークを埋め込んで画像を生成させることができます。<br>

※画像生成にはDALL-Eを使用するため、GPT-4以降で動作します。<br>
※GPTのバージョンは設定![歯車](img/icon_gear.png)の中の「チャットAI」の項目の中で「OpenAI」をクリックすると選択できます。

## プロンプトから画像を生成する
キーワード等の文字から画像を生成することができます。
1. 画面左上のアプリメニューから「画像生成」を選択します。<br>
![useai_16.png](img/UseAI_16.png)<br>
1. 生成したい画像の概要を入力し、送信します。
1. AIが画像を生成した結果が表示されます。<br>
![useai_17.png](img/UseAI_17.jpg)<br>
<br>

## 生成された画像を編集する
生成された画像を編集し、より望むものに近づけることができます。

1. 生成された画像の右上に表示されている「編集」を選択します。<br>
![EditImage_01](img/EditImage_01.jpg)
1. 編集画面が表示されます<br>
![EditImage_02](img/EditImage_02.jpg)
1. 編集したい箇所をマウスでドラッグして囲み、マスクを作成します。<br>
   マスクを作成した状態で「Done」を選択し、マスクの作成を完了します。<br>
![EditImage_03](img/EditImage_03.jpg)
1. 画面下のチャットボックスに編集したい内容を入力し、送信します。<br>
![EditImage_04](img/EditImage_04.png)
1. AIが画像を再生成した結果が表示されます。<br>
![EditImage_05](img/EditImage_05.jpg)

   * <div id=update09></div>画像の編集画面で左上の「すべてを選択」を押すことで、画面全体を選択することができます。<br>
   ![EditImage_06](img/EditImage_06.jpg)
   

## 生成される画像にウォーターマークを追加する

ailia DX Insightでは生成する画像に、ウォーターマークを手軽に追加することができます。

ここでは見本としてこちらのロゴマークを50％透過させた画像を使用します。<br>
![logo_02](img/ailia_DX_logo_02.png)

1. 画面右上にある歯車アイコンを押します。<br>
![setup_03](img/setup_03.png)
1. 「透かし画像」の項目内にある透かし画像ファイルパスの「登録」を選択し、表示されるエクスプローラー内にて使用する画像を選択します。<br>
![watermark_01](img/watermark_01.jpg)<br>
1. ウォーターマークに使用する画像ファイルのディレクトリが表示されれば、設定は完了です。<br>
![watermark_02](img/watermark_02.jpg)<br>

* 画像を生成すると、画像の右下にウォーターマークが追加されます。<br>
![watermark_03](img/watermark_03.jpg)<br>
<br>

## 画像のアスペクト比を変更する
ver.1.2.1より生成する画像のアスペクト比を変更することができます。
1. ailia DX Insightの設定![歯車](img/icon_gear.png)を選択します。
1. 画像サイズの項目を変更することで生成する画像のサイズ、アスペクト比を変更することができます。<br>
![EditImage_07](img/EditImage_07.jpg)<br>

1. 設定を変更後、画像生成を行うと指定したサイズで画像が生成されます。<br>
![EditImage_08](img/EditImage_08.jpg)<br>

## 文章で画像を編集する
Gemini、またはgpt-image-1を使用することで、チャットでの会話のような流れで生成画像を編集することができます。<br>
[※gpt-image-1を使用する場合はOpenAI Organizationの認証が必要となります。](OpenAI_Organization.md)<br>
[※Geminiを使用する場合はGeminiのAPIキーを作成して、ailia DX Insightにて登録をする必要があります。](Gemini.md#gemini-api-keyを取得する)<br>
![EditImg_tex01](img/EditImg_tex01.jpg)<br>
1. クエリバーのモデルを「Gemini」もしくは「gpt-image-1」に変更した上で、画像を生成します。<br>
![EditImg_tex02](img/EditImg_tex02.jpg)<br>
1. 画像に対して編集をしたい内容を文章で指定して送信します。<br>
![EditImg_tex03](img/EditImg_tex03.jpg)<br>
1. 編集された画像が生成されます。<br>
![EditImg_tex04](img/EditImg_tex04.jpg)<br>



#### [次のページへ&emsp;＞](Recording.md)
#### [一覧に戻る](UseAI.md)