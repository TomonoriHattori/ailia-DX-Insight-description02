## レート制限
OpenAIはサービスの安定性等の観点からレート制限を設けています。<br>
レート制限はRPM (リクエスト数/１分)、RPD (リクエスト数/１日)、TPM (トークン数/１分)、TPD (トークン数/１日)、IPM (イメージ数/１分) の５つの方法で測定されます。<br>
レート制限は、最初に何が起こるかに応じて、どのオプションでもヒットする可能性があります。たとえば、100 トークンのみを含むリクエストを 20 回 ChatCompletions エンドポイントに送信すると、その 20 回のリクエスト内で 150,000 トークンを送信していなくても (TPM 制限が 150,000 の場合)、制限に達してしまいます (RPM が 20 の場合)。<br>
また、レート制限はユーザーのTierと使用するモデルに毎に異なります。<br>

レート制限について詳しくは[OpenAIのHP](https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one)よりご確認ください。



## Tier
Tierは支払金額と最初の支払いからの経過日数によってTier1～Tier5の5段階に分かれています。（ユーザー登録のみの無料枠もあります）

<div class="scroll_area" style="width:100%;max-width:800px;overflow-x:scroll;">
    <table style="width:800px;">
      <thead>
      <tr>
      <th>Tier</th>
      <th>条件</th>
      <th>使用制限</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>無料</td>
      <td></td>
      <td>$100/月</td>
      </tr>
      <tr>
      <td>Tier1</td>
      <td>$5の支払い実績</td>
      <td>$100/月</td>
      </tr>
      <tr>
      <td>Tier2</td>
      <td>$50の支払い実績と最初の支払いから7日間以上の経過</td>
      <td>$500/月</td>
      </tr>
      <tr>
      <td>Tier3</td>
      <td>$100の支払い実績と最初の支払いから7日間以上の経過</td>
      <td>$1,000/月</td>
      </tr>
      <tr>
      <td>Tier4</td>
      <td>$250の支払い実績と最初の支払いから14日間以上の経過</td>
      <td>$5,000/月</td>
      </tr>
      <tr>
      <td>Tier5</td>
      <td>$1,000の支払い実績と最初の支払いから30日間以上の経過</td>
      <td>$50,000/月</td>
      </tr>
      </tbody>
    </table>
</div>

※Tierの条件については変動の可能性がある為、[OpenAIの公式HP](https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-one)も合わせてご参照ください。