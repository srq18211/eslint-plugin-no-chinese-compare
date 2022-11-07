module.exports = {
    rules: {
        "no-chinese-compare": {
            create: function (context) {
                return {
                    BinaryExpression(node) {
                        if (/[\u4e00-\u9fa5]/g.test(node.right.value)){
                            context.report({
                                node,
                                messageId:"avoidName",
                                message:'fuck',
                                data:{
                                    name:"foo"
                                }
                            })
                        }
                    }
                }
            }
        }
    }
};