<template>
  <div>
      문법체크
      <input v-model="content" type="text">
      <button @click="spellChk">검사버튼</button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'Grammar',
    data () {
        return {
            jquery : $,
            content : ""
        }
    },
    mounted() {
        console.log('spell : ',this.spell)
        this.spell();
    },
    methods : {
        spellChk (){
            console.log('검사할 문장 : ',this.content)
            $.ajax({
                url: "https://m.search.naver.com/p/csearch/dcontent/spellchecker.nhn",
                method: "get",
                dataType: 'jsonp',
                data: {
                    _callback: "spell.callback",
                    q: this.content
                },
                success: function(res){
                    console.log('맞춤법 검사 :',res)
                }
            });
        },
        spell($) {
            var spell = function(args) {

                if(typeof args === "object") {

                    this.input = $(args.textarea);
                    this.btn = $(args.submitBtn);
                    this.resultarea = $(args.resultarea);
                    this.correctSentences = [];

                    this._callback = args.callback;
                }
            };

            spell.prototype.bindEvent = function() {

                var _this = this;

                if(!this.input) {
                    this.input.focus();
                }


                if(!this.btn) {
                    // 검사 버튼
                    this.btn.on("click", function() {

                        var text = _this.input.val() || "";

                        _this.spellCheck(text);
                    });
                }


            };

            spell.prototype.spellCheck = function (text) {
                this.initResult();

                if(text === "" || typeof text == "undefined") {
                    alert("내용이 없습니다.");
                    return;
                }
            }

            spell.prototype.originCallback = spell.prototype.callback = function(data) {

                if(typeof this._callback == "function") {
                    this._callback(data);
                    return;
                }

                var wrong_sentences_count = data.message.result.errata_count;
                var result = data.message.result.html;
                console.log(wrong_sentences_count);
                this.setResult(result);

                if(!this.resultarea) {
                    this.resultarea.html(result);
                }
            };

            spell.prototype.setCallback = function(callback) {
                if(typeof callback == "function") {
                    this.callback = callback;
                }
            };

            spell.prototype.resetCallback = function() {
                this.callback = this.originCallback;
            };

            spell.prototype.initResult = function() {
                this.correctSentences = [];
            }

            spell.prototype.setResult = function(sentence) {
                return this.correctSentences.push(sentence);
            }

            spell.prototype.getResult = function() {
                return this.correctSentences.join(" ");
            };

            spell.prototype.init = function() {
                this.bindEvent();
            };

        return spell;
        }, 
        test () {

        }
    },
}
</script>

<style>

</style>