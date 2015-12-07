        var app = {};
function login(options) { //認証情報の設定
          // 認証情報
          var loginId = 'u-aizu';
          var password = 'vt4p2bf4'

          // 認証API呼び出しに必要なリクエストヘッダ設定
          options.headers = {};
          options.headers["Content-Type"] = "application/x-www-form-urlencoded";
          options.authRequest = true;
          options.body = "grant_type=password&username=" + loginId + "&password=" + password;
          options.method = 'POST';
          options.url = 'https://pk-api.pitchbase.jp/apiv0/pitchbase/auth'
          callApi(options);
        }

        //api呼び出しの雛形
        function callApi(options) {
          if (!options.method) {
            options.method = 'GET';
          }
          if (!options.contentType) {
            options.contentType = 'application/json';
          }
          if (!options.headers) {
            options.headers = {};
          }
          options.headers['X-PitchBase-API-Token'] = app.access_token;

          var xhr = $.ajax({
            type: options.method,
            dataType: "json",
            contentType: options.contentType,
            processData: false,
            url: options.url,
            data: options.body,
            headers: options.headers,
            crossDomain: true,
            xhrFields: {
              withCredentials: true
            },
            success: function (response) {
              console.log("Success ajax. ");
              options.success(response);
            },
            error: function (jqxhr, textStatus, error) {
              console.log("Failed ajax error. textStatus: " + textStatus);
              options.error(jqxhr, textStatus, error);
            }
          });
        }

        function loadTeamMaster() {
          // チームマスタ
          callApi({
            url: "https://pk-api.pitchbase.jp/apiv0/pitchbase/data/master/team_master",
            success: function (response) {
              console.log(response);
              $.each(response.results, function (index) {
                var team = response.results[index];
                var teamElement = $("#team-list").append("<tr/>").append("<td>" + team.team_code + "</td><td>" + team.team_name + "</td><td><img src='" + team.team_logo + "'/></td>");
//                teamElement.data("team_code", team.team_code);
//                teamElement.data("team_code", team.team.code);
                teamElement.click(function () {
                  app.team_code = $(this).data("team_code");
                  app.team_code = $(this).data("team_code");
                });

              });
            },
            error: function () {
              console.error("error Teammaster api");
            }
          });
        }

        function callRank() {
          // チームマスタ
          callApi({
            url: "https://pk-api.pitchbase.jp/apiv0/pitchbase/data/master/team_master",
            success: function (response) {
              console.log(response);
              $.each(response.results, function (index) {
                var team = response.results[index];
                var teamElement = $("#team-list").append("<tr/>").append("<div>").append("<td>" + team.team_code + "</td><td>" + team.team_name + "</td><td><img src='" + team.team_logo + "'/></td></div>");
                teamElement.data("team_code", team.team_code);
                teamElement.click(function () {
                  app.team_code = $(this).data("team_code");
                });

              });
            },
            error: function () {
              console.error("error Teammaster api");
            }
          });
        }

        function init() { //初期処理
          login({
            success: function (response) {
              console.log("success login");
              app.access_token = response.access_token;
              //callPitchSearch();
              loadTeamMaster();
            },
            error: function () {
              console.error("success login");
            }
          });
        }

        $(document).ready(function () {

          console.log("start pitchbase search sample app.")

          $("#init").click(function () {
            init();
          });
          $("#rank").click(function () {
            callRank();
          });
        });