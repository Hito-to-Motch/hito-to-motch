<template>
  <section class="section">
    <font size="7">場所一覧</font>
    <section class="container">
      <div class="columns features">
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://2.bp.blogspot.com/-Ck0Ergxbmcw/WOsvU6PsJKI/AAAAAAABDo0/ZydF-oZ0x1AKEPVU75VZ8dfJi-GUP-k_QCLcB/s800/bg_inaka_tanbo.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>テストタイトル：田んぼ</h4>
                <p>この田んぼでは有名なコシヒカリが育てられている．とてもおいしい米である．</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://4.bp.blogspot.com/-B6HCUKWOz18/VXOZHTK8G3I/AAAAAAAAuNs/MPJZi2jt93w/s800/tanada.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>テストタイトル：棚田</h4>
                <p>テスト文章：ここに画像の説明が書かれる．
                  Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4 modal-button" data-target="modal-image">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://3.bp.blogspot.com/-3rAW8b7zc4Q/VpufuHV-gTI/AAAAAAAA3J0/NcL-GXgj1_w/s1600/bg_kawara.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>テストタイトル：川辺</h4>
                <p>テスト文章：ここに画像の説明が書かれる．
                  Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns features">
        <div class="column is-4 modal-button" data-target="modal-card">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://4.bp.blogspot.com/-4FT-kB5z6AI/VpjBpDioYRI/AAAAAAAA25c/_v1gjUlwpIo/s1600/bg_natural_mori.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>テストタイトル：森 <br>木が生い茂っている</h4>
                <p>テスト文章：ここに画像の説明が書かれる．
                  Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://1.bp.blogspot.com/-Y2WCNS2K-HM/XVjgI3zZh2I/AAAAAAABUMk/tM-BaqaPHpYV2Nofl9wRpjlgLoZ9bJISgCLcBGAs/s1600/japan_gassyoudukuri_syuuraku.png" alt="butterfly image" class="modal-button" data-target="modal-image4">
              </figure>
            </div>
            <div class="card-content  modal-button" data-target="modal-card2">
              <div class="content">
                <h4>テストタイトル：田舎 <br>猿もイノシシもでる</h4>
                <p>テスト文章：ここに画像の説明が書かれる．
                  Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
    <div id="innerHTMLtext">
      <div class="columns is-moblie">
        <card title="picture" description="descrition for picture." image="http://shiramine.info/about/img_893-01.jpg" link="http://shiramine.info/about.html"></card>
      </div>
      <div class="columns is-moblie">
        <card title="picture" description="descrition for picture." image="http://shiramine.info/about/img_drn-01.jpg" link="http://shiramine.info/about.html"></card>
      </div>
    </div>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  name: 'HomePage',
  
  components: {
    Card
  }
}
</script>
