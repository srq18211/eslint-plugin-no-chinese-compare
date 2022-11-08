module.exports = {
  rules: {
    "to-compare": {
      meta: {
        docs: {
          description:
            "The rvalue of the comparison operator cannot be Chinese",
        },
      },
      create: function (context) {
        return {
          BinaryExpression(node) {
            if (node.operator === "=") return;
            if (
              [">", ">=", "<", "<=", "==", "!=", "===", "!=="].includes(
                node.operator
              ) &&
              /[\u4e00-\u9fa5]/g.test(node.right.value)
            ) {
              context.report({
                node: node.right,
                message:
                  "The rvalue of the comparison operator cannot be Chinese",
              });
            }
          },
        };
      },
    },
  },
};
