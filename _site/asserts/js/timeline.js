/**
 * 描述:  博客 时间线页面
 */
(function(win) {
	var timeline = {
		/**
		 * @description 监听滑动
		 */
		listenersScroll: function() {
			var eventMarks = document.querySelectorAll('.timeline-mark');
			//激活某一个mark dom
			var currPoint = function(dom) {
				for(var i = 0, len = eventMarks.length; i < len; i++) {
					eventMarks[i].parentNode.classList.remove('curr');
				}
				dom.parentNode.classList.add('curr');
//				if(dom.parentNode.classList.contains('closed')){
//					dom.parentNode.classList.remove('closed');
//					app.animate.animate(dom.parentNode.querySelector('.event-content'), {
//						display: 'show'
//					});
//				}
			};
			//监听滑动
			document.addEventListener('scroll', function() {
				//console.log("y:" + getScrollTop());
				var currTop = app.dimensions.getScrollTop();
				if(eventMarks) {
					var yArray = [];
					for(var i = 0, len = eventMarks.length; i < len; i++) {
						yArray[i] = app.offset.getTop(eventMarks[i]);
					}
					//分析哪一个更近
					var curr = 0;
					for(var i = 0, len = yArray.length; i < len; i++) {
						if(i >= 1) {
							if(yArray[i] > currTop && yArray[i - 1] < currTop) {
								curr = i;
							}
						}
					}
					currPoint(eventMarks[curr]);
				}
				//console.log("firsty:" + getdomY(document.querySelector('.timeline-mark')));
			});
			
		},
		/**
		 * @description 初始化book
		 */
		initAllItems: function() {
			var self = this;
			//绑定每一个的点击,显示和隐藏
			var eventThings = document.querySelectorAll('.event-title,.timeline-mark');
			app.event.bindEvent(eventThings, function(e) {
				var parent = this.parentNode;
				if(parent) {
					if(parent.classList.contains('closed')) {
						//已经关闭
						parent.classList.remove('closed');
						app.animate.animate(parent.querySelector('.event-content'), {
							display: 'show'
						});
					} else {
						parent.classList.add('closed');
						app.animate.animate(parent.querySelector('.event-content'), {
							display: 'hide'
						});
					}
				};
			});
			//年份的点击与隐藏
			var majorMarks = document.querySelectorAll('.timeline-marker-major');
			if(majorMarks) {
				app.event.bindEvent(majorMarks, function(el) {
					var eventContent = this.parentNode.querySelectorAll('.timeline-event');
					if(eventContent) {
						var isAllClosed = true;
						Array.prototype.forEach.call(eventContent, function(el) {
							if(el.classList.contains('closed')) {
								isAllClosed = false;

							}
						});
						Array.prototype.forEach.call(eventContent, function(el) {
							if(isAllClosed) {
								if(!el.classList.contains('closed')) {
									el.classList.add('closed');
									app.animate.animate(el.querySelector('.event-content'), {
										display: 'hide'
									});
								}

							} else {
								if(el.classList.contains('closed')) {
									el.classList.remove('closed');
									app.animate.animate(el.querySelector('.event-content'), {
										display: 'show'
									});
								}
							}
						});
					}
				});
			}
			//初始化
			var eventContent = document.querySelectorAll('.timeline-event');
			if(eventContent) {
				for(var i = 0, len = eventContent.length; i < len; i++) {
					if(eventContent[i].classList.contains('closed')) {
						app.animate.animate(eventContent[i].querySelector('.event-content'), {
							display: 'hide'
						});
					}
				}
			}
			//监听滑动
			self.listenersScroll();

		},
		/**
		 * @description 创建时间轴
		 */
		createTimeLine: function(){
			var data = [{
				"time":"现今",
				"event":[{
					"year":"2017",
					"date":"06.03",
					"title":"个人博客正式上线",
					//数组,每一个item都是p标签里的内容
					"content":[
						"基于jekyll目标搭建博客，由github托管。开始整理自己的知识体系，规划人生路线。",
						"从05.20开始有自己搭建一个blog的想法以后，便在网上寻找相关的教程。由于没什么基础所以掉过许多坑。",
						"当然，功夫不负有心人，终于在今天完成了个人博客的最后测试并正式上线！"
					],
					//图片数组
					"media":[
						"/asserts/images/timeline/img_2017_06_03_1.jpg",
						"/asserts/images/timeline/img_2017_06_03_2.jpg",
						"/asserts/images/timeline/img_2017_06_03_3.jpg"
					]
				},{
					"year":"2017",
					"date":"02.15",
					"title":"确定人生目标",
					//数组,每一个item都是p标签里的内容
					"content":[
						"大二的年华确定人生的目标只能说不早不晚，比我优秀的人很多，不过我相信每一个人的经历都是独一无二的!",
						"也许自己接触编程比较晚，英语水平也不足以支撑自己阅读很多英文文档，起步非常困难，但我不会就此放弃。接下来的大学时光都会用来巩固基础，不断完善自己的知识体系。",
						"好的准备不如坏的开始，现在努力并不算晚，同时也要感谢老爸老妈的大力支持。"
					]
				}]
			},{
				"time":"2016",
				"event":[{
					"year":"2016",
					"date":"11.20",
					"title":"开始重新思考人生",
					//数组,每一个item都是p标签里的内容
					"content":[
						"人最大的弱点在于不了解自己，不知道自己到底想要什么。",
						"当你回首往事，看不到自己真正存在过的痕迹时，就会感到非常的悲哀。",
						"重新思考自己的人生，重新定位对于迷茫的自己非常重要。",
						"所以停止了一切的活动，静下心来慢慢思考。"
					]
				},{
					"year":"2016",
					"date":"11.01",
					"title":"第二次奔波",
					//数组,每一个item都是p标签里的内容
					"content":[
						"人有时候就是这样，喜欢不断奔波和改变。",
						"这次我在一个创业型的公司负责一些繁杂琐事，在这里就不细说了，总之公司由于很多原因没有继续做下去，不过还是学到了一些东西。"
					]
				},{
					"year":"2016",
					"date":"03.01",
					"title":"初次经营店铺",
					//数组,每一个item都是p标签里的内容
					"content":[
						"因大学课程不是自己喜欢的专业课程，加上不喜欢条条框框的灌输式教学。所以总是想自己做点提升自己社会经验和生存能力的事情。",
						"最后加盟在家点点平台，负责两个校区的在家点点小店经营。",
						"说实话，我挺感谢家里对我的支持的，启动资金很大一部分都是家里给解决的，在经营的6个月里我体会到太多太多以前无论如何都体会不到的辛酸。",
						"最后以失败告终，失败原因内外都有。",
						"索性这些经历都让我迅速地成长，认识到自己以前的幼稚和无知。"
					],
					//图片数组
					"media":[
						"/asserts/images/graduate/img_2016_05_06_1.jpg",
						"/asserts/images/graduate/img_2016_05_06_2.jpg",
						"/asserts/images/graduate/img_2016_05_06_3.jpg",
						"/asserts/images/graduate/img_2016_05_06_4.jpg"
					]
				}]
			},{
				"time":"2015",
				"event":[{
					"year":"2015",
					"date":"09.01",
					"title":"我的大学",
					//数组,每一个item都是p标签里的内容
					"content":[
						"进入大学，即将开启一个新的人生。",
						"对未来充满憧憬，感觉人生才刚刚开始。"
					]
				}]
			}];
			var createTimeLineHtml = function(timeLineArray){
				var html = '';
				for(var i=0,len = timeLineArray.length;i<len;i++){
					var tmp = timeLineArray[i];
					var mtClass = (i===0)?'':'mt80';
					html += '<div class="timeline-date '+mtClass+'">';
					html += '<div class="timeline-marker-major">';
					html += '<div class="mask"></div>';
					html += '<div class="major-content"><div thisyear="" class="timeblock">'
					html += tmp.time;
					html += '</div></div>';	
					html += '<div class="clock"><span>';
					html += tmp.time;
					html += '</span></div>';
					html += '</div>';
					//开始创建事件
					html += createEventArray(tmp.event);
					html += '</div>';
				}
				return html;
			};
			var createEventArray = function(eventArray){
				var html = '';
				for(var i=0,len = eventArray.length;i<len;i++){
					var tmp = eventArray[i];
					var mtClass = (i===0)?'mt80':'mt40';
					html += '<div class="timeline-minor '+mtClass+' clearfix ">';
					html += '<h3>'+tmp.date+'<span>'+tmp.year+'</span></h3>';
					html += '<div class="timeline-event  ">';
					html += '<div class="timeline-mark"></div>';
					html += '<h3 class="event-title">'+tmp.title+'</h3>';
					html += '<div class="event-content ">';
					if(tmp.media){
						html += '<div class="media">';
						for(var j=0,len2=tmp.media.length;j<len2;j++){
							html += '<img src="'+tmp.media[j]+'" />';
						}
						html += '</div>';
					}
					if(tmp.content){	
						for(var j=0,len2=tmp.content.length;j<len2;j++){
							html += '<p>'+tmp.content[j]+'</p>';
						}
					}								
					html += '</div>';
					html += '</div>';
					html += '</div>';
				}
				return html;
			};
			
			var html = createTimeLineHtml(data);
			document.querySelector('.timeline-container').innerHTML = html;
		},
		/**
		 * @description book页面初始化
		 */
		init: function() {
			var self = this;
			self.createTimeLine();
			self.initAllItems();
		}
	};

	//初始化
	timeline.init();
})(window);