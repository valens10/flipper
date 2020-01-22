import 'package:moor/moor.dart';

class PriceTable extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get value => text()();
  IntColumn get categoryId => integer()
      .nullable()
      .customConstraint('NULL REFERENCES category_table(id)')();
}