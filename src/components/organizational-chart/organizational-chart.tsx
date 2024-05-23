// @mui
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/css";
//
import SimpleNode from "./_common/simple-node";
import { ListProps, SubListProps, OrganizationalChartProps } from "./types";
import Tree from "../tree-chart/Tree";
import TreeNode from "../tree-chart/TreeNode";
import { Box } from "@mui/material";
import TreeRow from "../tree-chart/TreeRow";

// ----------------------------------------------------------------------

export function flattenArray<T>(list: T[], key = "children"): T[] {
  let children: T[] = [];

  const flatten = list?.map((item: any) => {
    if (item[key] && item[key].length) {
      children = [...children, ...item[key]];
    }
    return item;
  });

  return flatten?.concat(
    children.length ? flattenArray(children, key) : children
  );
}

// Tree{}
//   List[][]
//     TreeNode[]
//     TreeNode[]

export default function OrganizationalChart({
  data,
  variant = "simple",
  sx,
  ...other
}: OrganizationalChartProps) {
  // const theme = useTheme();

  return (
    <Tree {...other}>
      {data.children.map((list, index) => (
        <TreeRow
          isMain={index === 0}
          isLast={index === data.children.length - 1}
          key={"tree-row-" + index.toString()}
        >
          {list.map((node) => {
            return (
              <TreeNode isMain={index === 0} key={node.name} label={node.name}>
                {null}
              </TreeNode>
            );
          })}
        </TreeRow>
      ))}
    </Tree>
  );
}

// ----------------------------------------------------------------------
