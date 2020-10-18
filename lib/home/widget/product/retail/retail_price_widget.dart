import 'package:flipper/domain/redux/app_state.dart';
import 'package:flipper/presentation/home/common_view_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';

class RetailPriceWidget extends StatefulWidget {
  const RetailPriceWidget({Key key, this.vm}) : super(key: key);
  final CommonViewModel vm;

  @override
  _RetailPriceWidgetState createState() => _RetailPriceWidgetState();
}

class _RetailPriceWidgetState extends State<RetailPriceWidget> {
  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, CommonViewModel>(
      distinct: true,
      converter: CommonViewModel.fromStore,
      builder: (BuildContext context, CommonViewModel vm) {
        return const Text('retail price widget');
        // FIXME(richard):
        // return StreamBuilder(
        //   stream: vm.database.variationDao.getItemVariationsByItemId(
        //       vm.tmpItem.id), //do we have regular variant on this item?
        //   builder: (BuildContext context, AsyncSnapshot<List<VariationTableData>> snapshot) {
        //     //if we have more than one variant do not show regular widget for changing supply price
        //     if (snapshot.data != null && snapshot.data.length < 2) {
        //       return RetailPrice(
        //         vm: widget.vm,
        //       );
        //     }
        //     return const SizedBox.shrink();
        //   },
        // );
      },
    );
  }
}