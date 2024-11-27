<template>
  <!-- mobile -->
  <div class="lg:hidden">
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">成分債券檔數</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">持債比重(%)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">平均最差殖利率(%)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">平均信用利差(%)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">平均票息率(%)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="mb-6 shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">平均修正存續期間(年)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
    <table class="shadow-2xl normal-table no-stripped-bg">
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            <p class="text-center">平均到期日(年)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-4">(ETF名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr class="border-y border-[#f4f4f4] border-solid">
          <td>
            <p class="pl-4">(指數名稱)</p>
          </td>
          <td>XXXXXX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-4">差異</p>
          </td>
          <td>XX.XX</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- desktop -->
  <div class="hidden lg:block">
    <table class="normal-table">
      <thead>
        <tr>
          <th width="25%" class="text-left">
            <p class="pl-10">項目</p>
          </th>
          <th width="25%">(ETF名稱)</th>
          <th width="25%">(指數名稱)</th>
          <th width="25%">差異</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="pl-10">成分債券檔數</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">持債比重(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">平均最差殖利率(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">平均信用利差(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">平均票息率(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">平均修正存續期間(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
        <tr>
          <td>
            <p class="pl-10">平均到期日(%)</p>
          </td>
          <td class="text-center">XXXXXX</td>
          <td class="text-center">XXXXXX</td>
          <td class=text-center>X.XX</td>
        </tr>
      </tbody>
      
    </table>
  </div>
</template>
<script setup>
</script>
