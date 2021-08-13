$('#change-link').click(function () {
    window.history.pushState({page: "another"}, "another page", 'https://' + window.location.href + "/1");
})

Vue.component('list-item',{
    template: '<div class="list_item_wrapp item_wrap item aos-init aos-animate" data-aos-delay="200" data-aos-duration="500" data-aos-once="false" data-aos="fade-in" :data-id="item.id">\n' +
        '  <table class="list_item">\n' +
        '    <tr class="adaptive_name">\n' +
        '      <td colspan="3">\n' +
        '        <div class="desc_name"><a :href="item.link"><span>{{item.name}}</span></a></div>\n' +
        '      </td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '      <td class="image_block">\n' +
        '        <div class="image_wrapper_block">\n' +
        '          <div class="overlay mobile"></div>\n' +
        '          <a :href="item.link" class="thumb shine" id="bx_3966226736_984987_pict">\n' +
        '            <img data-title="Подробнее" :src="item.image" :data-webp-src="item.image" :alt="item.name" :title="item.name" />\n' +
        '            <div class="card-data">' +
        '               <img height="20" alt="HARAKTERISTIKI_TIP_KARTY" class="har-logo" :src="item.image" :data-webp-src="item.image"> World' +
        '            </div>\n' +
        '          </a>\n' +
        '        </div>\n' +
        '        <div class="fast_view_block" data-event="jqm" data-param-form_id="fast_view" data-param-iblock_id="35" data-param-id="984987" data-param-item_href="%2Fcatalog%2Fkarty%2Fkreditnye_karty%2Fkredit-evropa-bank-kreditnaya-karta-travelpass%2F" data-name="fast_view">Быстрый просмотр</div>\n' +
        '        <a class="btn btn-default mobile img-button" target="_blank" href="/catalog/karty/kreditnye_karty/kredit-evropa-bank-kreditnaya-karta-travelpass/">Подробнее</a>\n' +
        '        <a class="btn btn-default ofo-href desc" onClick="ym(\'56316898\',\'reachGoal\', \'oformit\');" target="_blank" href="https://unicom24.ru/offer/rs/1qzsrjmrmllqi?partner=15884&sa=">Оформить</a>\n' +
        '      </td>\n' +
        '      <td class="description_wrapp">\n' +
        '        <div class="description">\n' +
        '          <div class="item-title">\n' +
        '            <a href="/catalog/karty/kreditnye_karty/kredit-evropa-bank-kreditnaya-karta-travelpass/" class="dark_link"><span>Кредит Европа Банк Кредитная карта Travelpass</span></a>\n' +
        '          </div>\n' +
        '          <div class="wrapp_stockers">\n' +
        '            <div class="article_block" >\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="preview_text">\n' +
        '            Рассрочка от 2 до 12 месяцев на покупки у партнеров. Погашение задолженности осуществляется ежемесячно равными платежами, исходя из количества месяцев рассрочки.\n' +
        '            <br>\n' +
        '            <br>\n' +
        '            Бонусные баллы начисляются за безналичную оплату товаров и услуг, которые моментально можно потратить на последующие покупки по курсу 1 балл = 1 ₽, предварительно проставив соответствующую отметку мобильном банке, или обменять баллы на рубли по курсу 1 балл = 0,75 ₽:\n' +
        '            <br>\n' +
        '            <br>\n' +
        '            Макс. 5 000 баллов в месяц.<br>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </td>\n' +
        '      <td class="information_wrapp main_item_wrapper">\n' +
        '        <div class="information   inner_content js_offers__984987">\n' +
        '          <div class="cost prices clearfix">\n' +
        '          </div>\n' +
        '          <div class="sku_props">\n' +
        '            <div class="bx_catalog_item_scu wrapper_sku" id="bx_3966226736_984987_sku_tree" data-site_id="s1" data-id="984987" data-offer_id="1" data-propertyid="1162" data-offer_iblockid="35">\n' +
        '              <div class="item_wrapper" style="text-align: center">\n' +
        '                <img src="/upload/delight.webpconverter/upload/resize_cache/uf/519/142_72_1/519598a30aa422cc495f4fcf156c5b48.png.webp?16234070341628" data-webp-src="/upload/resize_cache/uf/519/142_72_1/519598a30aa422cc495f4fcf156c5b48.png" height="60" hspace="5px" alt="/upload/resize_cache/uf/519/142_72_1/519598a30aa422cc495f4fcf156c5b48.png"/>                                    \n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <!-- Искулючаем кнопку "В сравнение" для карт раздела "Страхование".-->\n' +
        '          <div class="like_icons btn btn-default" onclick="kk_add_to_comparisons(984987,\'34ea5804459f828702ce0fdff323b790\');">\n' +
        '            <a href="javascript:void(0)">В сравнение</a>\n' +
        '          </div>\n' +
        '          <div class="props_list_wrapp " style="display:block">\n' +
        '            <!--elastic_block off-->\n' +
        '            <table class="props_list prod">\n' +
        '              <tr>\n' +
        '                <td><b><span>Кредитный лимит</span></b></td>\n' +
        '                <td><b><span>до 3 млн. руб.</span></b></td>\n' +
        '              </tr>\n' +
        '              <tr>\n' +
        '                <td><span>Льготный период</span></td>\n' +
        '                <td><span>55 дн.</span></td>\n' +
        '              </tr>\n' +
        '              <tr>\n' +
        '                <td><span>Процентная ставка</span></td>\n' +
        '                <td><span>от 0 %</span></td>\n' +
        '              </tr>\n' +
        '            </table>\n' +
        '          </div>\n' +
        '          <a class="btn btn-default ofo-href mobile" onClick="ym(\'56316898\',\'reachGoal\', \'oformit\');" target="_blank" href="https://unicom24.ru/offer/rs/1qzsrjmrmllqi?partner=15884&sa=">Оформить</a>\n' +
        '          <div class="counter_wrapp ">\n' +
        '            <div id="bx_3966226736_984987_basket_actions" class="button_block ">\n' +
        '              <!--noindex-->\n' +
        '              <!--/noindex-->\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="basket_props_block" id="bx_basket_div_984987">\n' +
        '        </div>\n' +
        '      </td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '      <td colspan="3">\n' +
        '        <div class="stickers cls-52 swiper-container" ref="swipSlider">\n' +
        '          <div class="swiper-wrapper" >\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Использование собственных средств</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">3D Secure</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Чип</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Бесконтактные платежи</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Онлайн-решение</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Дополнительная карта для членов семьи   </div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">С кэш-бэком</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Наличие бонусов</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">СМС-информирование</div>\n' +
        '            <div class="sticker_s_nizkim_protsentom swiper-slide">Доставка карты курьером</div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="swiper-button-prev" @click="prevSlide"></div>\n' +
        '        <div class="swiper-button-next" @click="nextSlide"></div>\n' +
        '      </td>\n' +
        '    </tr>\n' +
        '  </table>\n' +
        '</div>',
    props: ['index', 'item'],
    methods: {
        prevSlide() {
            this.slider.slidePrev()
        },
        nextSlide() {
            console.log(this.slider)
            this.slider.slideNext()
        },
    },
    mounted() {
        this.slider = new Swiper(this.$refs.swipSlider, {
            direction: 'horizontal',
            slidesPerView: 1,
            slidesPerGroup: 3,
            freeMode: true,
            observer: true,
            mousewheel: {
                forceToAxis: true,
                invert: true
            },
            watchOverflow: true
        });
        console.log(this.slider)
    }
})
new Vue({
    el: '#list-app',
    data() {
        return {
            link: window.location.href,
            sort: null,
            sortPath: 'desc',
            arr: [
                {
                    id: 984987,
                    link: '/catalog/karty/kreditnye_karty/kredit-evropa-bank-kreditnaya-karta-travelpass/',
                    name: 'Кредит Европа Банк Кредитная карта Travelpass'
                }
            ]
        }
    },
    methods: {
        changeSort(data) {
            if (this.sort != data) {
                this.sort = data
            } else {
                this.sortPath = this.sortPath === 'desc' ? 'asc' : 'desc'
            }
        },
        loadAfterChangeLink() {
            //@TODO Загрузка страницы
            let url
            axios.get(url).then(resp => {
                if (resp.status === 200) {
                    this.arr = resp.data
                }
            }).catch(e => {
                console.log(e)
            })
        }
    },
    computed: {
        getArr() {
            //@TODO менять при сортировке
            return this.arr
        }
    },
    watch: {
        link(data) {
            this.loadAfterChangeLink()
        }
    }
})