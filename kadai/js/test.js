    //1.Save クリックイベント
    $("#save").on("click", function () {

        // val()で値を取得する
        const key = $("#key").val();
        const value = $("#memo").val();
        // html側で入力されたデータを取得して確認
  
        console.log(key)
        console.log(value)
        // データを保存する
        localStorage.setItem(key,value);
        const html = `<li><span>${key}</span><span>${value}</span></li>`
  
        $("#list").append(html);
  
        
        $("#key").val("");
        $("#memo").val("");
        
        // localStorage.setItem(xx, xx);
  
        //一覧表示に追加(テンプレートリテラルを使う)
        // const html = `
        // <li>
        //   <span></span>
        //   <span></span>
        // </li>`
  
        // htmlに埋め込む
  
  
        // この↓消しちゃダメ
      });

          //2.clear クリックイベント
    $("#clear").on('click', function () {
        // 保存されたデータ（localStorage）を消す
        localStorage.clear();
        // 削除するときに、入力されている中身を空にする
        alert("全削除しました")
        //id="list"を削除する
        $("#list").empty();
      });

      $("#clear1").on('click', function () {
        // let clear_key = document.getElementById("clear_key");
        // 保存されたデータ（localStorage）から1行消す
        var Delete_key = document.getElementById("clear_key").value;
        localStorage.removeItem(Delete_key);
        
        console.log(Delete_key);
  
         $("#list").empty();
         for (let i = 0; i < localStorage.length; i++) {
            // 保存されたデータのkeyを取得
            const key = localStorage.key(i);
      
            // 何が入っているか確認してみよう☺️
            console.log(key);
      
            // getItemのKeyを使って保存されたデータを全部取得
            const value = localStorage.getItem(key);
      
            // 何が入っているか確認してみよう☺️
            const html = `
            <li>
              <span>${key}</span>
              <span>${value}</span>
            </li>`
            $("#list").append(html);
        }  
      });

          //3.ページ読み込み：保存データ取得表示
    for (let i = 0; i < localStorage.length; i++) {
        // 保存されたデータのkeyを取得
        const key = localStorage.key(i);
  
        // 何が入っているか確認してみよう☺️
        console.log(key);
  
        // getItemのKeyを使って保存されたデータを全部取得
        const value = localStorage.getItem(key);
  
        // 何が入っているか確認してみよう☺️
        const html = `
        <li>
          <span>${key}</span>
          <span>${value}</span>
        </li>`
        $("#list").append(html);
    }  