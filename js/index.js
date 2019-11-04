var oIpt = document.querySelector('.ipt');
        var oBtn = document.querySelector('.btn');
        var oxxx = document.querySelector('.xxx');
        var oNumber = Math.floor((Math.random() * 99999) + 1);
        var ostate = 1;
        var oend = 99999;
        var oRound = 0;

        oBtn.onclick = function () {
            var b = parseFloat(oNumber);
            var oText = document.querySelector('.aaa');
            var oOpenBut = document.querySelector('.reset');

            if (isNaN(oIpt.value)) {
                oText.innerHTML = `請輸入數字!!`;
            } else {
                var a = parseFloat(oIpt.value);
                if (a == b) {
                    oRound++;
                    oText.innerHTML = `答對!!`;
                    oxxx.innerHTML = `共猜了${oRound}次`;
                    oIpt.style.display = 'none';
                    oBtn.style.display = 'none';
                    oOpenBut.style.display = 'block';
                    oOpenBut.onclick = function () {
                        location.reload();
                    }

                } else if (a > b) {
                    oend = a;
                    oText.innerHTML = `猜錯囉!答案於${ostate}~${oend}之間`;
                    oRound++;
                    oxxx.innerHTML = `目前猜${oRound}次`;
                    console.log(oRound);
                } else if (a < b) {
                    ostate = a;
                    oText.innerHTML = `猜錯囉!!答案於${ostate}~${oend}之間`;
                    oRound++;
                    oxxx.innerHTML = `目前猜${oRound}次`;
                    console.log(oRound);
                }
            }
        }