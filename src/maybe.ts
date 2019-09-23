import group from "./group";
import Expression from "./types/expression";
import RawExpression from "./types/raw-expression";
import exprToRaw from "./util/expr-to-raw";

function maybe(exp: Expression): RawExpression {
  const raw = exprToRaw(exp);
  const grouped = group.nonCapturing(raw);

  return new RawExpression(`${grouped}?`);
}

export default maybe;
