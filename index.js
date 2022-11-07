module.exports = {
    rules: {
        "to-compare": {
            meta: {
                docs: {
                    description: '比较运算符的右值不能是中文'
                }
            },
            create: function (context) {
                return {
                    BinaryExpression(node) {
                        if(node.operator === '=') return
                        if (/[\u4e00-\u9fa5]/g.test(node.right.value)) {
                            context.report({
                                node,
                                message: '比较运算符的右值不能是中文'
                            })
                        }
                    }
                }
            }
        }
    }
};