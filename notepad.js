$(document).ready(function(){

				$("#min_btn").click(function(){						//for minimize
			        $("#container").hide();
			        $("#menuBar").hide();
			       
			   	 });

			    $("#max_btn").click(function(){						//for maximize
			        $("#container").show();
			        $("#menuBar").show();
			   	 });

			    $("#cls_btn").click(function(){						//for Window close
			    		window.close();
			     });
			
				$("#file").click(function(){						//for showing  file menu list
					$("#fileList").css({display: 'inline-block'});
					$("#editList").css({display: 'none'});
					$("#helpList").css({display: 'none'});
					$("#viewList").css({display: 'none'});
					$("#formatList").css({display: 'none'});
			     });
				
				$("#edit").click(function(){						//for showing  edit menu list
					$("#fileList").css({display: 'none'});
					$("#editList").css({display: 'inline-block'});
					$("#helpList").css({display: 'none'});
					$("#viewList").css({display: 'none'});
					$("#formatList").css({display: 'none'});
				 });

				$("#help").click(function(){						//for showing  help menu list
					$("#fileList").css({display: 'none'});
					$("#editList").css({display: 'none'});
					$("#helpList").css({display: 'inline-block'});
					$("#viewList").css({display: 'none'});
					$("#formatList").css({display: 'none'});
				 });

				$("#view").click(function(){						//for showing  view menu list
					$("#fileList").css({display: 'none'});
					$("#editList").css({display: 'none'});
					$("#helpList").css({display: 'none'});
					$("#viewList").css({display: 'inline-block'});
					$("#formatList").css({display: 'none'});
				 });

				$("#format").click(function(){						//for showing  format menu list
					$("#fileList").css({display: 'none'});
					$("#editList").css({display: 'none'});
					$("#helpList").css({display: 'none'});
					$("#viewList").css({display: 'none'});
					$("#formatList").css({display: 'inline-block'});
				 });

				
				$(".menus").click(function hideList(){
						$("#fileList").hide();
						$("#formatList").hide();
						$("#editList").hide();
						$("#helpList").hide();
						$("#viewList").hide();				
					});

			});